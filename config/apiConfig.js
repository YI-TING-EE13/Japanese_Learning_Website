/**
 * API 配置檔案
 * Gemini API Configuration
 * 
 * 此檔案管理所有外部 API 的配置和連接邏輯
 */

class APIConfig {
    constructor() {
        this.geminiApiKey = null;
        this.geminiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.isConfigured = false;
        this.rateLimitWindow = 60000; // 1分鐘
        this.rateLimitMax = 10; // 每分鐘最多10次請求
        this.requestHistory = [];
        
        // 載入已儲存的配置
        this.loadSavedConfig();
    }

    /**
     * 設定 Gemini API 金鑰
     * @param {string} apiKey - API 金鑰
     */
    setGeminiApiKey(apiKey) {
        if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
            throw new Error('API 金鑰不能為空');
        }
        
        this.geminiApiKey = apiKey.trim();
        this.isConfigured = true;
        
        // 儲存到本地儲存 (注意：實際應用中應加密儲存)
        localStorage.setItem('gemini_api_key', this.geminiApiKey);
        
        console.log('Gemini API 金鑰已設定');
    }

    /**
     * 移除 API 金鑰
     */
    removeApiKey() {
        this.geminiApiKey = null;
        this.isConfigured = false;
        localStorage.removeItem('gemini_api_key');
        console.log('API 金鑰已移除');
    }

    /**
     * 載入已儲存的配置
     */
    loadSavedConfig() {
        const savedKey = localStorage.getItem('gemini_api_key');
        if (savedKey) {
            this.geminiApiKey = savedKey;
            this.isConfigured = true;
            console.log('已載入儲存的 API 配置');
        }
    }

    /**
     * 檢查是否達到速率限制
     */
    checkRateLimit() {
        const now = Date.now();
        
        // 移除超過時間窗口的請求記錄
        this.requestHistory = this.requestHistory.filter(
            timestamp => now - timestamp < this.rateLimitWindow
        );
        
        // 檢查是否超過限制
        if (this.requestHistory.length >= this.rateLimitMax) {
            const oldestRequest = Math.min(...this.requestHistory);
            const waitTime = this.rateLimitWindow - (now - oldestRequest);
            throw new Error(`API 請求過於頻繁，請等待 ${Math.ceil(waitTime / 1000)} 秒後再試`);
        }
        
        // 記錄此次請求
        this.requestHistory.push(now);
    }

    /**
     * 測試 API 連接
     */
    async testConnection() {
        if (!this.isConfigured) {
            throw new Error('API 尚未配置');
        }

        try {
            this.checkRateLimit();
            
            const response = await fetch(`${this.geminiEndpoint}?key=${this.geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: 'Hello, this is a test message. Please respond with "Connection successful".'
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`API 測試失敗: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('API 連接測試成功:', data);
            return true;
            
        } catch (error) {
            console.error('API 連接測試失敗:', error);
            throw error;
        }
    }

    /**
     * 生成日語學習題目
     * @param {Object} options - 生成選項
     * @param {string} options.level - JLPT 等級 (N5, N4, N3, N2, N1)
     * @param {string} options.type - 題目類型 (漢字, 詞彙, 文法, 讀解)
     * @param {string} options.topic - 主題 (可選)
     * @param {number} options.count - 生成題目數量 (預設1)
     */
    async generateQuestions(options = {}) {
        if (!this.isConfigured) {
            throw new Error('API 尚未配置，請先設定 API 金鑰');
        }

        const {
            level = 'N5',
            type = '詞彙',
            topic = '',
            count = 1
        } = options;

        // 檢查速率限制
        this.checkRateLimit();

        // 構建提示詞
        const prompt = this.buildQuestionPrompt(level, type, topic, count);

        try {
            const response = await fetch(`${this.geminiEndpoint}?key=${this.geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 2048,
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`問題生成失敗: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (!generatedText) {
                throw new Error('API 回應格式錯誤');
            }

            // 解析生成的題目
            return this.parseGeneratedQuestions(generatedText, level, type, topic);
            
        } catch (error) {
            console.error('題目生成失敗:', error);
            throw error;
        }
    }

    /**
     * 構建題目生成提示詞
     */
    buildQuestionPrompt(level, type, topic, count) {
        const topicText = topic ? `，主題為「${topic}」` : '';
        
        return `請生成 ${count} 道日語能力測驗 ${level} 級別的「${type}」題目${topicText}。

請嚴格按照以下 JSON 格式回應，不要包含任何其他文字：

{
    "questions": [
        {
            "level": "${level}",
            "type": "${type}",
            "question": "題目內容",
            "options": ["選項1", "選項2", "選項3", "選項4"],
            "answer": "正確答案",
            "explanation": "詳細解析",
            "topic": "${topic || '一般'}",
            "difficulty": 1-5的難度係數,
            "source": "generated"
        }
    ]
}

要求：
1. 題目必須符合 ${level} 級別的標準
2. 選項必須有 4 個，其中只有一個正確答案
3. 解析要詳細說明為什麼這個答案是正確的
4. 題目內容要實用且貼近日常生活
5. 避免過於生僻或過時的詞彙
6. 確保選項之間有明確的區別

${type === '漢字' ? '漢字題目應包含讀音或寫法的考查。' : ''}
${type === '詞彙' ? '詞彙題目應考查詞語的意思、用法或搭配。' : ''}
${type === '文法' ? '文法題目應考查助詞、動詞變化、語法結構等。' : ''}
${type === '讀解' ? '讀解題目應包含一段短文，然後問相關問題。' : ''}`;
    }

    /**
     * 解析生成的題目 JSON
     */
    parseGeneratedQuestions(generatedText, level, type, topic) {
        try {
            // 嘗試提取 JSON 部分
            const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('無法找到有效的 JSON 格式');
            }

            const jsonText = jsonMatch[0];
            const parsed = JSON.parse(jsonText);
            
            if (!parsed.questions || !Array.isArray(parsed.questions)) {
                throw new Error('JSON 格式錯誤：缺少 questions 陣列');
            }

            // 為每個題目分配唯一 ID 和時間戳
            const questions = parsed.questions.map((q, index) => ({
                id: Date.now() + index, // 簡單的 ID 生成
                level: q.level || level,
                type: q.type || type,
                question: q.question,
                options: q.options,
                answer: q.answer,
                explanation: q.explanation,
                topic: q.topic || topic || '一般',
                difficulty: q.difficulty || 3,
                source: 'generated',
                createdAt: new Date().toISOString()
            }));

            // 驗證題目格式
            questions.forEach(this.validateQuestion);
            
            return questions;
            
        } catch (error) {
            console.error('解析生成題目失敗:', error);
            console.log('原始回應:', generatedText);
            throw new Error(`題目解析失敗: ${error.message}`);
        }
    }

    /**
     * 驗證題目格式
     */
    validateQuestion(question) {
        const required = ['question', 'options', 'answer', 'explanation'];
        const missing = required.filter(field => !question[field]);
        
        if (missing.length > 0) {
            throw new Error(`題目缺少必要欄位: ${missing.join(', ')}`);
        }
        
        if (!Array.isArray(question.options) || question.options.length !== 4) {
            throw new Error('選項必須是包含4個元素的陣列');
        }
        
        if (!question.options.includes(question.answer)) {
            throw new Error('正確答案必須在選項中');
        }
    }

    /**
     * 取得 API 配置狀態
     */
    getStatus() {
        return {
            isConfigured: this.isConfigured,
            hasApiKey: !!this.geminiApiKey,
            rateLimitRemaining: Math.max(0, this.rateLimitMax - this.requestHistory.length),
            nextResetTime: this.requestHistory.length > 0 ? 
                new Date(Math.min(...this.requestHistory) + this.rateLimitWindow) : null
        };
    }
}

// 全域實例
const apiConfig = new APIConfig();

// 匯出到全域範圍
if (typeof window !== 'undefined') {
    window.APIConfig = APIConfig;
    window.apiConfig = apiConfig;
}

// Node.js 環境匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APIConfig, apiConfig };
}
