document.addEventListener('DOMContentLoaded', () => {

    // --- 多語言翻譯物件 ---
    const translations = {
             noBadges: "尚未獲得任何徽章，繼續學習吧！",
            chartLabel: "測驗分數進度",
            progressChartTitle: "學習進度圖表",
            settingsTitle: "API 設定",
            geminiApiTitle: "Gemini API 配置",
            apiNotConfigured: "尚未配置",
            apiConfigured: "已配置",
            apiTesting: "測試中...",
            apiKeyLabel: "API 金鑰:",
            apiKeyHelper: "您可以在 Google AI Studio 取得免費的 API 金鑰",
            saveApiKey: "儲存金鑰",
            testApi: "測試連接",
            removeApiKey: "移除金鑰",
            questionGeneratorTitle: "題目生成器",
            genLevelLabel: "等級:",
            genTypeLabel: "類型:",
            genTopicLabel: "主題 (可選):",
            genCountLabel: "數量:",
            generateQuestions: "生成題目",
            apiKeySaved: "API 金鑰儲存成功！",
            apiKeyRemoved: "API 金鑰已移除！",
            testSuccess: "連接測試成功！",
            testFailed: "連接測試失敗：",
            generateSuccess: "題目生成成功！",
            generateFailed: "題目生成失敗："
        },
        en: {
            pageTitle: "Japanese Proficiency Test",
            mainTitle: "Japanese Proficiency Test",
            mainSubtitle: "Choose your level and start the challenge!",
            levelTitle: "Select Level",
            levelBeginner: "Beginner",
            quantityTitle: "Select Number of Questions",
            quantity10: "10 Qs",
            quantity20: "20 Qs",
            quantity50: "50 Qs",
            customPlaceholder: "Custom",
            startBtn: "Start Quiz",
            historyBtn: "View Learning History",
            settingsBtn: "API Settings",
            quizInProgress: "Quiz in Progress...",
            submitBtn: "Submit Answers",
            resultsTitle: "Quiz Results",
            wrongAnswersTitle: "Review Mistakes",
            restartBtn: "Try Again",
            historyTitle: "Learning History",
            myBadgesTitle: "My Badges",
            myHistoryTitle: "Test History",
            backBtn: "Back to Home",
            confirmSubmit: "Are you sure you want to submit?",
            alertLevelQuantity: "Please select a level and number of questions!",
            alertQuantityPositive: "Number of questions must be greater than 0!",
            alertNotEnoughQuestions: "Sorry, the question bank for {level} only has {count} questions. Please choose a smaller number.",
            totalScore: "Total Score",
            correctCount: "Correct Answers",
            timeSpent: "Time Spent",
            categoryScores: "Category Scores:",
            yourAnswer: "Your Answer",
            correctAnswer: "Correct Answer",
            explanation: "Explanation",
            notAnswered: "Not answered",
            achievementUnlocked: "Achievement Unlocked!",
            date: "Date",
            level: "Level",
            score: "Score",
            noHistory: "No test history yet. Complete a quiz to start!",
            noBadges: "No badges earned yet. Keep learning!",
            chartLabel: "Quiz Score Progress",
            progressChartTitle: "Learning Progress Chart",
            settingsTitle: "API Settings",
            geminiApiTitle: "Gemini API Configuration",
            apiNotConfigured: "Not Configured",
            apiConfigured: "Configured",
            apiTesting: "Testing...",
            apiKeyLabel: "API Key:",
            apiKeyHelper: "You can get a free API key from Google AI Studio",
            saveApiKey: "Save Key",
            testApi: "Test Connection",
            removeApiKey: "Remove Key",
            questionGeneratorTitle: "Question Generator",
            genLevelLabel: "Level:",
            genTypeLabel: "Type:",
            genTopicLabel: "Topic (Optional):",
            genCountLabel: "Count:",
            generateQuestions: "Generate Questions",
            apiKeySaved: "API key saved successfully!",
            apiKeyRemoved: "API key removed!",
            testSuccess: "Connection successful!",
            testFailed: "Connection failed: ",
            generateSuccess: "Questions generated successfully!",
            generateFailed: "Generation failed: "
        },
        zh: {
            pageTitle: "日文能力測驗",
            mainTitle: "日文能力測驗",
            mainSubtitle: "選擇你的等級，開始挑戰吧！",
            levelTitle: "選擇等級",
            levelBeginner: "初級",
            quantityTitle: "選擇題數",
            quantity10: "10題",
            quantity20: "20題",
            quantity50: "50題",
            customPlaceholder: "自訂題數",
            startBtn: "開始測驗",
            historyBtn: "查看學習紀錄",
            settingsBtn: "API 設定",
            quizInProgress: "測驗進行中...",
            submitBtn: "提交答案",
            resultsTitle: "測驗結果",
            wrongAnswersTitle: "錯題解析",
            restartBtn: "再測一次",
            historyTitle: "學習紀錄",
            myBadgesTitle: "我的徽章",
            myHistoryTitle: "測驗歷史",
            backBtn: "返回首頁",
            confirmSubmit: "確定要提交答案嗎？",
            alertLevelQuantity: "請選擇等級和題數！",
            alertQuantityPositive: "題數必須大於0！",
            alertNotEnoughQuestions: "抱歉，{level} 等級的題庫目前只有 {count} 題，請選擇較少的題數。",
            totalScore: "總分",
            correctCount: "答對題數",
            timeSpent: "花費時間",
            categoryScores: "各類別得分率：",
            yourAnswer: "你的答案",
            correctAnswer: "正確答案",
            explanation: "解析",
            notAnswered: "未作答",
            achievementUnlocked: "成就解鎖！",
            date: "日期",
            level: "等級",
            score: "分數",
            noHistory: "還沒有測驗紀錄，快完成一次測驗吧！",
            noBadges: "尚未獲得任何徽章，繼續學習吧！",
            chartLabel: "測驗分數進度",
            progressChartTitle: "學習進度圖表",
            settingsTitle: "API 設定",
            geminiApiTitle: "Gemini API 配置",
            apiNotConfigured: "尚未配置",
            apiConfigured: "已配置",
            apiTesting: "測試中...",
            apiKeyLabel: "API 金鑰:",
            apiKeyHelper: "您可以在 Google AI Studio 取得免費的 API 金鑰",
            saveApiKey: "儲存金鑰",
            testApi: "測試連接",
            removeApiKey: "移除金鑰",
            questionGeneratorTitle: "題目生成器",
            genLevelLabel: "等級:",
            genTypeLabel: "類型:",
            genTopicLabel: "主題 (可選):",
            genCountLabel: "數量:",
            generateQuestions: "生成題目",
            apiKeySaved: "API 金鑰儲存成功！",
            apiKeyRemoved: "API 金鑰已移除！",
            testSuccess: "連接測試成功！",
            testFailed: "連接測試失敗：",
            generateSuccess: "題目生成成功！",
            generateFailed: "題目生成失敗："
        }
    };
    
    // --- 狀態變數 ---
    let currentLanguage = 'zh';
    let myChart = null; // Chart.js 圖表實例

    // 從外部模組獲取題庫
    let questionDB = [];
    
    // 初始化題庫
    function initializeQuestionDatabase() {
        if (window.QuestionDatabase && window.QuestionDatabase.questionDB) {
            questionDB = window.QuestionDatabase.questionDB;
            console.log(`題庫已載入: ${questionDB.length} 題`);
        } else {
            console.error('無法載入題庫模組');
            alert('題庫載入失敗，請重新整理頁面');
        }
    }

    // --- 徽章資料庫 ---
    const achievementsDB = {
        firstQuiz: { icon: '🔰', zh: { name: '初次挑戰', desc: '完成你的第一次測驗' }, en: { name: 'First Challenge', desc: 'Complete your first quiz' } },
        perfectScore: { icon: '🏆', zh: { name: '完美主義者', desc: '在測驗中獲得100分' }, en: { name: 'Perfectionist', desc: 'Get a perfect score of 100' } },
        n5master: { icon: '🐣', zh: { name: 'N5入門', desc: '完成一次N5測驗' }, en: { name: 'N5 Starter', desc: 'Complete an N5 quiz' } },
        quickLearner: { icon: '⚡️', zh: { name: '速讀者', desc: '在1分鐘內完成10題以上的測驗' }, en: { name: 'Quick Learner', desc: 'Finish a 10+ question quiz in under 1 minute' } },
    };

    // --- DOM 元素 (部分新增) ---
    const langSwitchers = document.querySelectorAll('.language-switcher button');
    const screens = {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen'),
        history: document.getElementById('history-screen'),
        settings: document.getElementById('settings-screen')
    };
    const showHistoryBtn = document.getElementById('show-history-btn');
    const showSettingsBtn = document.getElementById('show-settings-btn');
    const backToStartBtn = document.getElementById('back-to-start-btn');
    const backToStartFromSettingsBtn = document.getElementById('back-to-start-from-settings-btn');
    const historyListContainer = document.getElementById('history-list-container');
    const achievementsContainer = document.getElementById('achievements-container');
    const popup = document.getElementById('achievement-popup');
    const popupClose = document.querySelector('.popup-close');
    
    // 設定界面元素
    const apiKeyInput = document.getElementById('api-key-input');
    const toggleApiKeyVisibilityBtn = document.getElementById('toggle-api-key-visibility');
    const saveApiKeyBtn = document.getElementById('save-api-key-btn');
    const testApiBtn = document.getElementById('test-api-btn');
    const removeApiKeyBtn = document.getElementById('remove-api-key-btn');
    const apiStatusIndicator = document.getElementById('api-status-indicator');
    const apiStatusText = document.getElementById('api-status-text');
    const apiTestResult = document.getElementById('api-test-result');
    
    // 題目生成器元素
    const genLevelSelect = document.getElementById('gen-level');
    const genTypeSelect = document.getElementById('gen-type');
    const genTopicInput = document.getElementById('gen-topic');
    const genCountInput = document.getElementById('gen-count');
    const generateQuestionsBtn = document.getElementById('generate-questions-btn');
    const generationResult = document.getElementById('generation-result');
    
    // (其他元素獲取與前一版相同，此處省略)
    const levelCards = document.querySelectorAll('.card');
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const customQuantityInput = document.getElementById('custom-quantity');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const timerElement = document.getElementById('timer');
    const quizContent = document.getElementById('quiz-content');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const scoreDetails = document.getElementById('score-details');
    const wrongAnswersContainer = document.getElementById('wrong-answers');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    let selectedLevel, selectedQuantity, currentQuizQuestions = [], userAnswers = {}, timer, secondsElapsed = 0;

    // --- 初始化 ---
    function init() {
        // 首先初始化題庫
        initializeQuestionDatabase();
        
        const savedLang = localStorage.getItem('userLanguage') || 'zh';
        setLanguage(savedLang);

        // 檢查所有必要的DOM元素是否存在
        if (!startQuizBtn || !showHistoryBtn || !backToStartBtn) {
            console.error('Some required DOM elements are missing');
            return;
        }

        // **修正**：將所有事件監聽器放在一個清晰的地方
        // 語言切換
        langSwitchers.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
        
        // 等級選擇
        levelCards.forEach(card => {
            card.addEventListener('click', () => {
                levelCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedLevel = card.dataset.level;
            });
        });

        // 預設題數按鈕選擇
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                quantityBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedQuantity = parseInt(btn.dataset.quantity);
                if (customQuantityInput) customQuantityInput.value = '';
            });
        });

        // 自訂題數輸入
        if (customQuantityInput) {
            customQuantityInput.addEventListener('input', () => {
                quantityBtns.forEach(b => b.classList.remove('selected'));
                selectedQuantity = parseInt(customQuantityInput.value) || null;
            });
        }

        // 主要按鈕
        startQuizBtn.addEventListener('click', startQuiz);
        if (submitQuizBtn) {
            submitQuizBtn.addEventListener('click', () => {
                 if (confirm(translations[currentLanguage].confirmSubmit)) submitQuiz();
            });
        }
        if (restartQuizBtn) {
            restartQuizBtn.addEventListener('click', resetQuiz);
        }
        showHistoryBtn.addEventListener('click', showHistoryScreen);
        if (showSettingsBtn) {
            showSettingsBtn.addEventListener('click', showSettingsScreen);
        }
        backToStartBtn.addEventListener('click', () => switchScreen(screens.start));
        if (backToStartFromSettingsBtn) {
            backToStartFromSettingsBtn.addEventListener('click', () => switchScreen(screens.start));
        }
        
        // 設定界面事件監聽器
        if (toggleApiKeyVisibilityBtn) {
            toggleApiKeyVisibilityBtn.addEventListener('click', toggleApiKeyVisibility);
        }
        if (saveApiKeyBtn) {
            saveApiKeyBtn.addEventListener('click', saveApiKey);
        }
        if (testApiBtn) {
            testApiBtn.addEventListener('click', testApiConnection);
        }
        if (removeApiKeyBtn) {
            removeApiKeyBtn.addEventListener('click', removeApiKey);
        }
        if (generateQuestionsBtn) {
            generateQuestionsBtn.addEventListener('click', generateQuestions);
        }
        
        // 彈窗關閉
        if (popupClose) {
            popupClose.addEventListener('click', () => popup.classList.add('hidden'));
        }
    }

    // --- 語言功能 ---
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('userLanguage', lang);
        
        langSwitchers.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
        
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            el.textContent = translations[lang][key] || el.textContent;
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.dataset.translatePlaceholder;
            el.placeholder = translations[lang][key] || el.placeholder;
        });
    }

    // --- 測驗核心功能 (大部分與前一版相同，但加入多語言提示) ---
    function startQuiz() {
        if (!selectedLevel || !selectedQuantity) {
            alert(translations[currentLanguage].alertLevelQuantity);
            return;
        }
        if (selectedQuantity <= 0) {
            alert(translations[currentLanguage].alertQuantityPositive);
            return;
        }

        // 使用外部模組的函數取得題目
        if (window.QuestionDatabase && window.QuestionDatabase.getRandomQuestions) {
            currentQuizQuestions = window.QuestionDatabase.getRandomQuestions(selectedLevel, selectedQuantity);
        } else {
            // 回退到原本的方法
            const availableQuestions = questionDB.filter(q => q.level === selectedLevel || (selectedLevel === 'Beginner' && (q.level === 'N5' || q.level === 'N4')));
            currentQuizQuestions = availableQuestions.sort(() => 0.5 - Math.random()).slice(0, selectedQuantity);
        }

        if (currentQuizQuestions.length < selectedQuantity) {
            let alertMsg = translations[currentLanguage].alertNotEnoughQuestions;
            alertMsg = alertMsg.replace('{level}', selectedLevel).replace('{count}', currentQuizQuestions.length);
            alert(alertMsg);
            return;
        }

        displayQuiz();
        switchScreen(screens.quiz);
        startTimer();
    }
    
    function displayQuiz() {
        quizContent.innerHTML = '';
        currentQuizQuestions.forEach((question, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            
            let optionsHtml = '';
            question.options.forEach(option => {
                optionsHtml += `
                    <label>
                        <input type="radio" name="question${question.id}" value="${option}">
                        ${option}
                    </label>
                `;
            });
            
            questionBlock.innerHTML = `
                <div class="question-title">${index + 1}. ${question.question}</div>
                <div class="options-container">
                    ${optionsHtml}
                </div>
            `;
            
            quizContent.appendChild(questionBlock);
        });
    }
    
    function submitQuiz() {
        clearInterval(timer);
        currentQuizQuestions.forEach(q => {
            const selectedOption = document.querySelector(`input[name="question${q.id}"]:checked`);
            userAnswers[q.id] = selectedOption ? selectedOption.value : null;
        });
        const results = calculateResults();
        saveHistory(results);
        displayResults(results);
        switchScreen(screens.result);
        checkAchievements(results);
    }
    
    function calculateResults() {
        let correctCount = 0;
        let categoryStats = {};
        let questionTypes = [...new Set(currentQuizQuestions.map(q => q.type))];
        questionTypes.forEach(type => {
            categoryStats[type] = { correct: 0, total: 0 };
        });

        currentQuizQuestions.forEach(q => {
            categoryStats[q.type].total++;
            if (userAnswers[q.id] === q.answer) {
                correctCount++;
                categoryStats[q.type].correct++;
            }
        });

        const score = (correctCount / currentQuizQuestions.length) * 100;
        return { score, correctCount, total: currentQuizQuestions.length, time: secondsElapsed, categoryStats };
    }

    function displayResults(results) {
        // ... (修改以使用多語言和 results 物件) ...
        const { score, correctCount, total, time, categoryStats } = results;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        
        let categoryHtml = `<h4>${translations[currentLanguage].categoryScores}</h4><ul>`;
        for (const type in categoryStats) {
            const stats = categoryStats[type];
            const percentage = stats.total > 0 ? ((stats.correct / stats.total) * 100).toFixed(0) : 0;
            categoryHtml += `<li>${type}：${stats.correct} / ${stats.total} (${percentage}%)</li>`;
        }
        categoryHtml += '</ul>';

        scoreDetails.innerHTML = `
            <h3>${translations[currentLanguage].totalScore}：<span class="final-score">${score.toFixed(1)}</span></h3>
            <p>${translations[currentLanguage].correctCount}：${correctCount} / ${total}</p>
            <p>${translations[currentLanguage].timeSpent}：${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</p>
            ${categoryHtml}
        `;

        wrongAnswersContainer.innerHTML = `<h2 data-translate-key="wrongAnswersTitle">${translations[currentLanguage].wrongAnswersTitle}</h2>`;
        currentQuizQuestions.forEach(q => {
            if (userAnswers[q.id] !== q.answer) {
                const wrongAnswerElement = document.createElement('div');
                wrongAnswerElement.className = 'wrong-answer-block';
                wrongAnswerElement.innerHTML = `
                    <p class="question-title">${q.question}</p>
                    <p>${translations[currentLanguage].yourAnswer}：<span class="user-answer">${userAnswers[q.id] || translations[currentLanguage].notAnswered}</span></p>
                    <p>${translations[currentLanguage].correctAnswer}：<span class="correct-answer">${q.answer}</span></p>
                    <p class="explanation">${translations[currentLanguage].explanation}：${q.explanation}</p>
                `;
                wrongAnswersContainer.appendChild(wrongAnswerElement);
            }
        });
    }
    
    // --- 歷史紀錄與徽章功能 (新增圖表邏輯) ---
    function saveHistory(results) { /* ... (無變更) ... */ let history = JSON.parse(localStorage.getItem('quizHistory')) || []; history.unshift({ date: new Date().toISOString().split('T')[0], level: selectedLevel, score: parseFloat(results.score.toFixed(1)), time: results.time }); if(history.length > 50) history.pop(); localStorage.setItem('quizHistory', JSON.stringify(history)); }

    function showHistoryScreen() {
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        
        // **新增**：繪製圖表
        drawProgressChart(history);

        // 載入徽章
        const unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges')) || [];
        achievementsContainer.innerHTML = '';
        if (Object.keys(achievementsDB).length > 0) {
            for (const id in achievementsDB) {
                const badge = achievementsDB[id];
                const isUnlocked = unlockedBadges.includes(id);
                const badgeEl = document.createElement('div');
                badgeEl.className = `achievement-badge ${isUnlocked ? 'unlocked' : ''}`;
                badgeEl.innerHTML = `<div class="icon">${badge.icon}</div><div class="name">${badge[currentLanguage].name}</div>`;
                achievementsContainer.appendChild(badgeEl);
            }
        } else {
             achievementsContainer.innerHTML = `<p>${translations[currentLanguage].noBadges}</p>`;
        }

        // 載入歷史列表
        historyListContainer.innerHTML = '';
        if (history.length > 0) {
            history.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'history-item';
                itemEl.innerHTML = `<span>${item.date}</span><span>${translations[currentLanguage].level}: ${item.level}</span><span class="score">${translations[currentLanguage].score}: ${item.score}</span>`;
                historyListContainer.appendChild(itemEl);
            });
        } else {
            historyListContainer.innerHTML = `<p>${translations[currentLanguage].noHistory}</p>`;
        }

        switchScreen(screens.history);
    }
    
    // --- 設定界面功能 ---
    function showSettingsScreen() {
        updateApiStatus();
        switchScreen(screens.settings);
    }
    
    function updateApiStatus() {
        if (!window.apiConfig) return;
        
        const status = window.apiConfig.getStatus();
        const statusDot = apiStatusIndicator.querySelector('.status-dot');
        
        if (status.isConfigured) {
            statusDot.className = 'status-dot configured';
            apiStatusText.textContent = translations[currentLanguage].apiConfigured;
            removeApiKeyBtn.disabled = false;
            testApiBtn.disabled = false;
            generateQuestionsBtn.disabled = false;
        } else {
            statusDot.className = 'status-dot';
            apiStatusText.textContent = translations[currentLanguage].apiNotConfigured;
            removeApiKeyBtn.disabled = true;
            testApiBtn.disabled = true;
            generateQuestionsBtn.disabled = true;
        }
        
        // 載入已存在的 API 金鑰到輸入框
        if (apiKeyInput && status.hasApiKey) {
            apiKeyInput.value = '••••••••••••••••••••••••••••••••••••••••';
        }
    }
    
    function toggleApiKeyVisibility() {
        if (apiKeyInput.type === 'password') {
            apiKeyInput.type = 'text';
            toggleApiKeyVisibilityBtn.textContent = '🙈';
        } else {
            apiKeyInput.type = 'password';
            toggleApiKeyVisibilityBtn.textContent = '👁️';
        }
    }
    
    function saveApiKey() {
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey || apiKey === '••••••••••••••••••••••••••••••••••••••••') {
            showMessage(apiTestResult, translations[currentLanguage].testFailed + '請輸入有效的 API 金鑰', 'error');
            return;
        }
        
        try {
            window.apiConfig.setGeminiApiKey(apiKey);
            showMessage(apiTestResult, translations[currentLanguage].apiKeySaved, 'success');
            updateApiStatus();
        } catch (error) {
            showMessage(apiTestResult, translations[currentLanguage].testFailed + error.message, 'error');
        }
    }
    
    async function testApiConnection() {
        if (!window.apiConfig || !window.apiConfig.isConfigured) {
            showMessage(apiTestResult, translations[currentLanguage].testFailed + '請先設定 API 金鑰', 'error');
            return;
        }
        
        // 更新按鈕狀態
        const originalText = testApiBtn.textContent;
        testApiBtn.disabled = true;
        testApiBtn.innerHTML = '<span class="loading"></span> ' + translations[currentLanguage].apiTesting;
        
        // 更新狀態指示器
        const statusDot = apiStatusIndicator.querySelector('.status-dot');
        statusDot.className = 'status-dot testing';
        apiStatusText.textContent = translations[currentLanguage].apiTesting;
        
        try {
            await window.apiConfig.testConnection();
            showMessage(apiTestResult, translations[currentLanguage].testSuccess, 'success');
            updateApiStatus();
        } catch (error) {
            showMessage(apiTestResult, translations[currentLanguage].testFailed + error.message, 'error');
            updateApiStatus();
        } finally {
            testApiBtn.disabled = false;
            testApiBtn.textContent = originalText;
        }
    }
    
    function removeApiKey() {
        if (confirm('確定要移除 API 金鑰嗎？')) {
            window.apiConfig.removeApiKey();
            apiKeyInput.value = '';
            showMessage(apiTestResult, translations[currentLanguage].apiKeyRemoved, 'success');
            updateApiStatus();
        }
    }
    
    async function generateQuestions() {
        if (!window.apiConfig || !window.apiConfig.isConfigured) {
            showMessage(generationResult, translations[currentLanguage].generateFailed + '請先設定 API 金鑰', 'error');
            return;
        }
        
        const level = genLevelSelect.value;
        const type = genTypeSelect.value;
        const topic = genTopicInput.value.trim();
        const count = parseInt(genCountInput.value) || 1;
        
        // 更新按鈕狀態
        const originalText = generateQuestionsBtn.textContent;
        generateQuestionsBtn.disabled = true;
        generateQuestionsBtn.innerHTML = '<span class="loading"></span> 生成中...';
        
        try {
            const questions = await window.apiConfig.generateQuestions({
                level,
                type,
                topic,
                count
            });
            
            // 顯示生成的題目
            displayGeneratedQuestions(questions);
            
            // 將生成的題目添加到題庫
            if (window.QuestionDatabase && window.QuestionDatabase.questionDB) {
                window.QuestionDatabase.questionDB.push(...questions);
                questionDB.push(...questions);
            }
            
            showMessage(generationResult, translations[currentLanguage].generateSuccess + ` 共生成 ${questions.length} 題`, 'success');
            
        } catch (error) {
            showMessage(generationResult, translations[currentLanguage].generateFailed + error.message, 'error');
        } finally {
            generateQuestionsBtn.disabled = false;
            generateQuestionsBtn.textContent = originalText;
        }
    }
    
    function displayGeneratedQuestions(questions) {
        const container = document.createElement('div');
        container.className = 'generated-questions-container';
        
        questions.forEach((question, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'generated-question';
            questionEl.innerHTML = `
                <h4>題目 ${index + 1}: ${question.question}</h4>
                <div class="options">
                    ${question.options.map(option => `<div class="option">• ${option}</div>`).join('')}
                </div>
                <div class="answer"><strong>正確答案:</strong> ${question.answer}</div>
                <div class="explanation"><strong>解析:</strong> ${question.explanation}</div>
            `;
            container.appendChild(questionEl);
        });
        
        generationResult.innerHTML = '';
        generationResult.appendChild(container);
        generationResult.classList.remove('hidden');
    }
    
    function showMessage(container, message, type) {
        container.textContent = message;
        container.className = `test-result ${type}`;
        container.classList.remove('hidden');
        
        // 3秒後自動隱藏
        setTimeout(() => {
            container.classList.add('hidden');
        }, 3000);
    }
    
    // **新增**：繪製圖表的函式
    function drawProgressChart(history) {
        const ctx = document.getElementById('progressChart').getContext('2d');
        
        // 如果已有圖表，先銷毀
        if (myChart) {
            myChart.destroy();
        }
        
        // 準備圖表數據
        const reversedHistory = [...history].reverse(); // 讓最早的紀錄在最左邊
        const labels = reversedHistory.map(item => item.date);
        const data = reversedHistory.map(item => item.score);

        myChart = new Chart(ctx, {
            type: 'line', // 折線圖
            data: {
                labels: labels,
                datasets: [{
                    label: translations[currentLanguage].chartLabel,
                    data: data,
                    borderColor: '#FF9800', // 使用我們的次色
                    backgroundColor: 'rgba(255, 193, 7, 0.2)', // 使用我們的主色並加上透明度
                    fill: true,
                    tension: 0.1 // 讓線條稍微圓滑
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100, // Y軸最大值為100分
                        ticks: {
                            color: '#5D4037' // Y軸刻度顏色
                        }
                    },
                    x: {
                        ticks: {
                            color: '#5D4037' // X軸刻度顏色
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                           color: '#5D4037' // 圖例文字顏色
                        }
                    }
                }
            }
        });
    }

    function checkAchievements(results) {
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        let unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges')) || [];
        let newAchievement = null;

        // 1. 首次測驗
        if (history.length === 1 && !unlockedBadges.includes('firstQuiz')) {
            newAchievement = 'firstQuiz';
        }
        // 2. 完美得分
        if (results.score >= 100 && !unlockedBadges.includes('perfectScore')) {
            newAchievement = 'perfectScore';
        }
        // 3. N5入門
        if (selectedLevel === 'N5' && !unlockedBadges.includes('n5master')) {
            newAchievement = 'n5master';
        }
        // 4. 速讀者
        if (results.total >= 10 && results.time < 60 && !unlockedBadges.includes('quickLearner')) {
            newAchievement = 'quickLearner';
        }
        
        if (newAchievement) {
            if (!unlockedBadges.includes(newAchievement)) {
                unlockedBadges.push(newAchievement);
                localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
                showAchievementPopup(newAchievement);
            }
        }
    }

    function showAchievementPopup(id) {
        const achievement = achievementsDB[id];
        document.getElementById('achievement-icon').textContent = achievement.icon;
        document.getElementById('achievement-name').textContent = achievement[currentLanguage].name;
        document.getElementById('achievement-desc').textContent = achievement[currentLanguage].desc;
        popup.classList.remove('hidden');
    }

    // --- 工具函式 ---
    function switchScreen(activeScreen) {
        for(const screenKey in screens) {
            screens[screenKey].classList.remove('active');
        }
        activeScreen.classList.add('active');
    }
    
    function resetQuiz() {
        // (與前一版相同)
        selectedLevel = null;
        selectedQuantity = null;
        userAnswers = {};
        currentQuizQuestions = [];
        secondsElapsed = 0;
        clearInterval(timer);
        
        levelCards.forEach(c => c.classList.remove('selected'));
        quantityBtns.forEach(b => b.classList.remove('selected'));
        if (customQuantityInput) customQuantityInput.value = '';
        
        switchScreen(screens.start);
    }
    
    function startTimer() {
        secondsElapsed = 0;
        if (timerElement) timerElement.textContent = '00:00';
        timer = setInterval(() => {
            secondsElapsed++;
            const minutes = Math.floor(secondsElapsed / 60);
            const seconds = secondsElapsed % 60;
            if (timerElement) {
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
    
    // 啟動！
    init();
});