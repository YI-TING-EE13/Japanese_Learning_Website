/**
 * API Configuration Module
 * Gemini API Configuration and Management System
 * 
 * This module handles all external API configurations and connection logic
 * for the Japanese Learning Web Application.
 * 
 * Features:
 * - Google Gemini API integration
 * - Rate limiting with configurable windows
 * - Modern SDK-style initialization
 * - Comprehensive error handling
 * - Question generation for JLPT levels N5-N1
 * 
 * @author Japanese Learning Web Team
 * @version 2.0.0
 * @since 2025-07-16
 */

class APIConfig {
    /**
     * Constructs a new APIConfig instance
     * 
     * @param {Object} options - Configuration options
     * @param {string} [options.model='gemini-1.5-flash'] - Gemini model to use
     * @param {boolean} [options.enableRateLimit=false] - Enable rate limiting
     * @param {number} [options.rateLimitWindow=60000] - Rate limit window in ms
     * @param {number} [options.rateLimitMax=15] - Max requests per window
     */
    constructor(options = {}) {
        /** @private {string|null} API key for Gemini */
        this.geminiApiKey = null;
        
        /** @private {string} Current model being used */
        this.model = options.model || 'gemini-1.5-flash';
        
        /** @private {string} Complete API endpoint URL */
        this.geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`;
        
        /** @private {boolean} Whether API is properly configured */
        this.isConfigured = false;
        
        // Rate limiting configuration (optional for better UX)
        /** @private {boolean} Whether rate limiting is enabled */
        this.enableRateLimit = options.enableRateLimit || false;
        
        /** @private {number} Time window for rate limiting in milliseconds */
        this.rateLimitWindow = options.rateLimitWindow || 60000; // 1 minute
        
        /** @private {number} Maximum requests allowed per window */
        this.rateLimitMax = options.rateLimitMax || 15;
        
        /** @private {number[]} Array of request timestamps for rate limiting */
        this.requestHistory = [];
        
        // Load any saved configuration from localStorage
        this.loadSavedConfig();
    }

    /**
     * Modern Gemini API initialization method (SDK-style)
     * Provides a more intuitive way to initialize the API similar to official SDKs
     * 
     * @param {string} apiKey - The Gemini API key from Google AI Studio
     * @param {Object} [options={}] - Additional configuration options
     * @param {string} [options.model] - Override the default model
     * @param {boolean} [options.enableRateLimit] - Override rate limiting setting
     * @returns {APIConfig} Returns this instance for method chaining
     * @throws {Error} If apiKey is invalid
     * 
     * @example
     * const ai = apiConfig.initialize('your-api-key', {
     *   model: 'gemini-1.5-flash',
     *   enableRateLimit: true
     * });
     */
    initialize(apiKey, options = {}) {
        this.setGeminiApiKey(apiKey);
        
        if (options.model) {
            this.setModel(options.model);
        }
        
        if (options.enableRateLimit !== undefined) {
            this.enableRateLimit = options.enableRateLimit;
        }
        
        return this;
    }

    /**
     * Sets the Gemini model to use for API requests
     * 
     * @param {string} model - Model name (e.g., 'gemini-1.5-flash', 'gemini-pro')
     * @throws {Error} If model name is invalid
     * 
     * @example
     * apiConfig.setModel('gemini-1.5-flash');
     */
    setModel(model) {
        if (!model || typeof model !== 'string') {
            throw new Error('Model name must be a non-empty string');
        }
        
        this.model = model;
        this.geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
        console.log(`已切換到模型: ${model}`);
    }

    /**
     * Generates content using the Gemini API
     * Simplified content generation method with comprehensive error handling
     * 
     * @param {string} prompt - The text prompt to send to the AI
     * @param {Object} [options={}] - Generation configuration options
     * @param {number} [options.temperature=0.7] - Controls randomness (0.0-1.0)
     * @param {number} [options.topK=40] - Limits token selection to top K choices
     * @param {number} [options.topP=0.95] - Nucleus sampling parameter
     * @param {number} [options.maxOutputTokens=2048] - Maximum tokens in response
     * @returns {Promise<{text: string, data: Object}>} Generated content and raw API response
     * @throws {Error} If API is not configured or request fails
     * 
     * @example
     * const result = await apiConfig.generateContent('Hello, how are you?', {
     *   temperature: 0.5,
     *   maxOutputTokens: 1000
     * });
     * console.log(result.text);
     */
    async generateContent(prompt, options = {}) {
        if (!this.isConfigured) {
            throw new Error('API not configured. Please call initialize() method first.');
        }

        // Only check rate limit if enabled (better UX)
        if (this.enableRateLimit) {
            this.checkRateLimit();
        }

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
                        temperature: options.temperature || 0.7,
                        topK: options.topK || 40,
                        topP: options.topP || 0.95,
                        maxOutputTokens: options.maxOutputTokens || 2048,
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`API request failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('Complete API response:', data); // Debug logging
            
            // Comprehensive response validation
            if (!data.candidates || !Array.isArray(data.candidates) || data.candidates.length === 0) {
                console.error('No candidates in API response:', data);
                throw new Error('API response format error: No candidate responses found');
            }
            
            const candidate = data.candidates[0];
            if (!candidate.content || !candidate.content.parts || !Array.isArray(candidate.content.parts)) {
                console.error('Invalid candidate response format:', candidate);
                throw new Error('API response format error: Invalid candidate response structure');
            }
            
            const text = candidate.content.parts[0]?.text;
            if (!text) {
                console.error('Cannot extract text content:', candidate.content.parts);
                throw new Error('API response format error: Cannot extract text content');
            }

            return { text, data };
            
        } catch (error) {
            console.error('Content generation failed:', error);
            throw error;
        }
    }

    /**
     * Sets the Gemini API key and enables the API configuration
     * 
     * @param {string} apiKey - The API key obtained from Google AI Studio
     * @throws {Error} If apiKey is empty, null, or not a string
     * 
     * @example
     * apiConfig.setGeminiApiKey('your-api-key-here');
     */
    setGeminiApiKey(apiKey) {
        if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
            throw new Error('API key cannot be empty or null');
        }
        
        this.geminiApiKey = apiKey.trim();
        this.isConfigured = true;
        
        // Store in localStorage (Note: In production, consider encryption)
        localStorage.setItem('gemini_api_key', this.geminiApiKey);
        
        console.log('Gemini API key has been set successfully');
    }

    /**
     * Removes the API key and disables the API configuration
     * Also cleans up localStorage
     * 
     * @example
     * apiConfig.removeApiKey();
     */
    removeApiKey() {
        this.geminiApiKey = null;
        this.isConfigured = false;
        localStorage.removeItem('gemini_api_key');
        console.log('API key has been removed');
    }

    /**
     * Loads previously saved API configuration from localStorage
     * Called automatically during initialization
     * 
     * @private
     */
    loadSavedConfig() {
        const savedKey = localStorage.getItem('gemini_api_key');
        if (savedKey) {
            this.geminiApiKey = savedKey;
            this.isConfigured = true;
            console.log('Loaded saved API configuration');
        }
    }

    /**
     * Checks if rate limiting threshold has been reached
     * Only enforced when rate limiting is enabled for better UX
     * 
     * @throws {Error} If rate limit is exceeded
     * @private
     */
    checkRateLimit() {
        if (!this.enableRateLimit) return; // Skip if rate limiting disabled
        
        const now = Date.now();
        
        // Remove expired request records outside the time window
        this.requestHistory = this.requestHistory.filter(
            timestamp => now - timestamp < this.rateLimitWindow
        );
        
        // Check if limit exceeded
        if (this.requestHistory.length >= this.rateLimitMax) {
            const oldestRequest = Math.min(...this.requestHistory);
            const waitTime = this.rateLimitWindow - (now - oldestRequest);
            throw new Error(`API requests too frequent. Please wait ${Math.ceil(waitTime / 1000)} seconds before retrying.`);
        }
        
        // Record this request
        this.requestHistory.push(now);
    }

    /**
     * Tests the API connection with a simple request
     * 
     * @returns {Promise<boolean>} True if connection successful
     * @throws {Error} If API is not configured or connection fails
     * 
     * @example
     * try {
     *   await apiConfig.testConnection();
     *   console.log('API is working!');
     * } catch (error) {
     *   console.error('API connection failed:', error.message);
     * }
     */
    async testConnection() {
        if (!this.isConfigured) {
            throw new Error('API not configured');
        }

        try {
            const result = await this.generateContent('Hello, this is a test message. Please respond with "Connection successful".');
            console.log('API connection test successful:', result.data);
            return true;
            
        } catch (error) {
            console.error('API connection test failed:', error);
            throw error;
        }
    }

    /**
     * Generates Japanese learning questions using AI
     * 
     * @param {Object} [options={}] - Question generation options
     * @param {string} [options.level='N5'] - JLPT level (N5, N4, N3, N2, N1)
     * @param {string} [options.type='詞彙'] - Question type (漢字, 詞彙, 文法, 讀解)
     * @param {string} [options.topic=''] - Optional topic for questions
     * @param {number} [options.count=1] - Number of questions to generate (1-5)
     * @returns {Promise<Array>} Array of generated question objects
     * @throws {Error} If API is not configured or generation fails
     * 
     * @example
     * const questions = await apiConfig.generateQuestions({
     *   level: 'N5',
     *   type: '詞彙',
     *   topic: '食物',
     *   count: 3
     * });
     */
    async generateQuestions(options = {}) {
        if (!this.isConfigured) {
            throw new Error('API not configured. Please set API key first.');
        }

        const {
            level = 'N5',
            type = '詞彙',
            topic = '',
            count = 1
        } = options;

        // Build the prompt for question generation
        const prompt = this.buildQuestionPrompt(level, type, topic, count);

        try {
            // Use the generateContent method
            const result = await this.generateContent(prompt);
            
            // Parse the generated questions
            return this.parseGeneratedQuestions(result.text, level, type, topic);
            
        } catch (error) {
            console.error('Question generation failed:', error);
            throw error;
        }
    }

    /**
     * Builds a structured prompt for question generation
     * 
     * @private
     * @param {string} level - JLPT level (N5, N4, N3, N2, N1)
     * @param {string} type - Question type (漢字, 詞彙, 文法, 讀解)
     * @param {string} topic - Optional topic for questions
     * @param {number} count - Number of questions to generate
     * @returns {string} Formatted prompt string for AI
     * 
     * @description Constructs a detailed prompt that ensures consistent
     * JSON format response and maintains quality standards for
     * Japanese learning questions
     * 
     * @example
     * const prompt = this.buildQuestionPrompt('N5', '詞彙', '食物', 2);
     * // Returns detailed prompt requesting 2 N5 vocabulary questions about food
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
     * Parses AI-generated question JSON into structured objects
     * 
     * @private
     * @param {string} generatedText - Raw text response from AI
     * @param {string} level - JLPT level for fallback
     * @param {string} type - Question type for fallback
     * @param {string} topic - Topic for fallback
     * @returns {Array} Array of parsed question objects
     * @throws {Error} If JSON parsing fails or format is invalid
     * 
     * @description Safely parses AI response, validates question format,
     * and provides fallback data if needed
     * 
     * @example
     * const questions = this.parseGeneratedQuestions(response, 'N5', '詞彙', '食物');
     * // Returns: [{ question: "...", options: [...], answer: "...", ... }]
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
     * Validates question object structure and content
     * 
     * @private
     * @param {Object} question - Question object to validate
     * @throws {Error} If question is missing required fields or format is invalid
     * 
     * @description Ensures question objects meet the required format:
     * - Has all required fields (question, options, answer, explanation)
     * - Options array contains exactly 4 elements
     * - Answer exists within the options array
     * 
     * @example
     * this.validateQuestion({
     *   question: "どれが正しいですか？",
     *   options: ["A", "B", "C", "D"],
     *   answer: "A",
     *   explanation: "..."
     * });
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
     * Gets current API configuration status and rate limit information
     * 
     * @returns {Object} Status object containing configuration and rate limit info
     * @property {boolean} isConfigured - Whether API is properly configured
     * @property {boolean} hasApiKey - Whether API key is set
     * @property {number} rateLimitRemaining - Remaining requests in current window
     * @property {Date|null} nextResetTime - When rate limit window resets
     * 
     * @description Provides comprehensive status information for monitoring
     * API usage and configuration state
     * 
     * @example
     * const status = apiConfig.getStatus();
     * console.log(`API configured: ${status.isConfigured}`);
     * console.log(`Requests remaining: ${status.rateLimitRemaining}`);
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

// Global instance with customizable configuration
const apiConfig = new APIConfig({
    model: 'gemini-1.5-flash', // Use stable available model
    enableRateLimit: false // Disable rate limiting by default for better UX
});

// 簡化的全域函數，類似官方 SDK 風格
function createGeminiAI(apiKey, options = {}) {
    return new APIConfig(options).initialize(apiKey, options);
}

// 匯出到全域範圍
if (typeof window !== 'undefined') {
    window.APIConfig = APIConfig;
    window.apiConfig = apiConfig;
    window.createGeminiAI = createGeminiAI; // 提供更直觀的初始化方法
}

// Node.js 環境匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APIConfig, apiConfig };
}
