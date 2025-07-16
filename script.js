document.addEventListener('DOMContentLoaded', () => {

    // --- 多語言翻譯物件 ---
    const translations = {
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
            progressChartTitle: "Learning Progress Chart"
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
            chartLabel: "測驗分數進步圖",
            progressChartTitle: "學習進度表"
        }
    };
    
    // --- 狀態變數 ---
    let currentLanguage = 'zh';
    let myChart = null; // Chart.js 圖表實例

    // --- 模擬題庫 ---
    const questionDB = [
        // --- N5 ---
        { id: 1, level: 'N5', type: '漢字', question: '「水」の読み方は？', options: ['みず', 'すい', 'みづ', 'すいり'], answer: 'みず', explanation: '「水」在單獨使用時通常讀作「みず」。' },
        { id: 2, level: 'N5', type: '詞彙', question: 'わたしは　まいばん　テレビを＿＿＿＿。', options: ['みます', 'ききます', 'よみます', 'たべます'], answer: 'みます', explanation: '「テレビを見る」是「看電視」的固定用法。' },
        { id: 3, level: 'N5', type: '文法', question: 'これは　だれの　かばんです＿＿。', options: ['が', 'を', 'か', 'に'], answer: 'か', explanation: '句尾的「か」表示疑問。' },
        { id: 13, level: 'N5', type: '漢字', question: '「大きい」の読み方は？', options: ['おおきい', 'だいきい', 'たいきい', 'おっきい'], answer: 'おおきい', explanation: '「大きい」的正確讀音是「おおきい」。' },
        { id: 14, level: 'N5', type: '詞彙', question: '駅まで　＿＿＿＿で　行きますか。', options: ['どうして', 'どちら', 'なんで', 'どのように'], answer: 'なんで', explanation: '「なんで」在這裡是口語中詢問方法、手段的「用什麼」。' },
        { id: 15, level: 'N5', type: '文法', question: '机の　うえ＿＿＿　ねこが　います。', options: ['に', 'で', 'を', 'へ'], answer: 'に', explanation: '助詞「に」用來表示存在的場所。' },
        { id: 16, level: 'N5', type: '詞彙', question: 'きのうは　いい＿＿＿＿でしたね。', options: ['てんき', 'でんき', 'げんき', 'てんし'], answer: 'てんき', explanation: '「いい天気」是「好天氣」的意思。' },
        { id: 17, level: 'N5', type: '文法', question: 'すみませんが、ドアを＿＿＿＿ください。', options: ['しめて', 'しめって', 'しめても', 'しめる'], answer: 'しめて', explanation: '「〜てください」前面接動詞的て形，表示請求。' },

        // --- N4 ---
        { id: 4, level: 'N4', type: '詞彙', question: 'この町はとても＿＿＿＿です。', options: ['にぎやか', 'しずか', 'きれい', 'ゆうめい'], answer: 'にぎやか', explanation: '「にぎやか」是「熱鬧」的意思，符合描述城鎮的常用詞。' },
        { id: 5, level: 'N4', type: '文法', question: '明日、雨が＿＿＿＿、試合は中止です。', options: ['降れば', '降って', '降るなら', '降ると'], answer: '降れば', explanation: '「〜ば」用於表示假定條件。如果下雨，比賽就中止。' },
        { id: 6, level: 'N4', type: '漢字', question: '「歌」の動詞形は？', options: ['歌います', '話します', '聞きます', '書きます'], answer: '歌います', explanation: '「歌」的動詞形式是「歌います」(唱歌)。' },
        { id: 18, level: 'N4', type: '文法', question: '弟は　漢字を　書く＿＿＿が　できます。', options: ['こと', 'もの', 'ほう', 'とき'], answer: 'こと', explanation: '「動詞原形 + ことができます」表示「能夠做某事」。' },
        { id: 19, level: 'N4', type: '詞彙', question: '問題が＿＿＿＿なので、先生に聞きました。', options: ['かんたん', 'ふくざつ', 'べんり', 'じょうぶ'], answer: 'ふくざつ', explanation: '「複雑」是「複雜」的意思，所以才會去問老師。' },
        { id: 20, level: 'N4', type: '漢字', question: '「旅行」の読み方は？', options: ['りょこう', 'りよこう', 'りこう', 'りょうこ'], answer: 'りょこう', explanation: '「旅行」的正確讀音是「りょこう」。' },
        { id: 21, level: 'N4', type: '文法', question: '会議の前に、資料を＿＿＿＿おきます。', options: ['読んで', '読むで', '読みて', '読んだ'], answer: '読んで', explanation: '「〜ておきます」表示為將來做準備，前面接動詞て形。' },

        // --- N3 ---
        { id: 7, level: 'N3', type: '文法', question: '彼は病気だった＿＿＿＿、会議に出席した。', options: ['にもかかわらず', 'おかげで', 'せいか', 'わりに'], answer: 'にもかかわらず', explanation: '「〜にもかかわらず」表示「儘管...卻...」，用於前後文意相反的情況。' },
        { id: 8, level: 'N3', type: '詞彙', question: 'そのニュースを聞いて、＿＿＿＿した。', options: ['がっかり', 'びっくり', 'はっきり', 'うっかり'], answer: 'びっくり', explanation: '「びっくりする」是「嚇一跳、吃驚」的意思。' },
        { id: 22, level: 'N3', type: '漢字', question: '「案内」の読み方は？', options: ['あんない', 'あない', 'あんねい', 'あんあい'], answer: 'あんない', explanation: '「案内」的正確讀音是「あんない」。' },
        { id: 23, level: 'N3', type: '文法', question: 'このお寺は、有名＿＿＿＿、いつも人が多い。', options: ['なだけあって', 'なばかりに', 'なものだから', 'なせいか'], answer: 'なだけあって', explanation: '「〜だけあって」表示「不愧是...，正因為...」，前接的理由與後述結果相符。' },
        { id: 24, level: 'N3', type: '詞彙', question: '彼は私の意見に＿＿＿＿してくれた。', options: ['賛成', '反対', '成功', '感謝'], answer: '賛成', explanation: '「賛成する」是「贊成」的意思。' },
        { id: 40, level: 'N3', type: '讀解', question: '「田中さんは昨日、デパートで青いセーターを買いました。しかし、家に帰って着てみると、思ったよりサイズが小さかったので、今日、交換しに行くつもりです。」この文章の内容と合っているものはどれか。', options: ['田中さんは今日、青いセーターを買う。', '田中さんのセーターは大きすぎた。', '田中さんは昨日、デパートに行った。', '田中さんはセーターを交換できない。'], answer: '田中さんは昨日、デパートに行った。', explanation: '文章第一句明確指出「田中さんは昨日、デパートで青いセーターを買いました」，所以「昨天去了百貨公司」是正確的。' },


        // --- N2 ---
        { id: 9, level: 'N2', type: '文法', question: 'この問題は難しくて、私には解け＿＿＿＿。', options: ['かねる', 'がたい', 'そうもない', 'きれない'], answer: 'そうもない', explanation: '「〜そうもない」表示「看起來不可能...」，強調可能性極低。' },
        { id: 25, level: 'N2', type: '詞彙', question: '彼は＿＿＿＿な知識を持っている。', options: ['膨大', '巨大', '拡大', '増大'], answer: '膨大', explanation: '「膨大な知識」是「龐大的知識」的固定搭配。' },
        { id: 26, level: 'N2', type: '文法', question: '一度決めた＿＿＿＿、最後までやり遂げるべきだ。', options: ['以上は', '上は', 'からには', 'ところを'], answer: 'からには', explanation: '「〜からには」表示「既然已經...就理應...」，帶有強烈的決心和義務感。' },
        { id: 27, level: 'N2', type: '漢字', question: '「解決」の同義語はどれか。', options: ['処理', '解釈', '解放', '分析'], answer: '処理', explanation: '「解決」和「処理」都有處理、解決問題的意思，但「処理」更側重於事務性的處理。在此選項中為最佳解。' },
        { id: 28, level: 'N2', type: '詞彙', question: '彼の話は＿＿＿＿があって面白い。', options: ['ユーモア', 'ジョーク', '冗談', 'しゃれ'], answer: 'ユーモア', explanation: '「ユーモア」(humor) 指整體帶有趣味、幽默感，與「話」(談話內容) 搭配最自然。' },
        { id: 29, level: 'N2', type: '文法', question: '大雨で電車が止まった＿＿＿＿、会議に遅れてしまった。', options: ['あげく', '末に', '結果', 'あまり'], answer: 'あげく', explanation: '「〜あげく」表示「...的結果(通常是不好的結果)」。前面常接長時間或反覆的行為。' },

        // --- N1 ---
        { id: 11, level: 'N1', type: '詞彙', question: '彼の態度は非常に＿＿＿＿だ。', options: ['傲慢（ごうまん）', '謙虚（けんきょ）', '臆病（おくびょう）', '柔軟（じゅうなん）'], answer: '傲慢（ごうまん）', explanation: '「傲慢」意指態度高傲、看不起人。' },
        { id: 30, level: 'N1', type: '文法', question: 'その作家の最新作は、読む＿＿＿＿傑作だと言われている。', options: ['までもない', 'べくもない', 'にたえない', 'に足る'], answer: 'までもない', explanation: '「〜までもない」表示「連...的必要都沒有」，用來強調事情的顯而易見性。這裡意指「不用讀就知道是傑作」。' },
        { id: 31, level: 'N1', type: '詞彙', question: '両国間の交渉は＿＿＿＿している。', options: ['難航', '航海', '難行', '運行'], answer: '難航', explanation: '「難航（なんこう）する」常用來比喻事情進展不順利、陷入困境。' },
        { id: 32, level: 'N1', type: '文法', question: '長年の努力＿＿＿＿、彼はついに夢を実現した。', options: ['の極み', 'をもって', 'の末', 'ならでは'], answer: 'の末', explanation: '「〜の末（すえ）」表示「經過了(長時間的)...之後，最終...」。' },
        { id: 33, level: 'N1', type: '漢字', question: '「陳腐」の正しい読み方は？', options: ['ちんぷ', 'ちんふ', 'ちんぶ', 'じんぷ'], answer: 'ちんぷ', explanation: '「陳腐」的正確讀音是「ちんぷ」，意指陳腐、老套。' },
        { id: 34, level: 'N1', type: '文法', question: '今回の失敗を＿＿＿＿、二度と同じ過ちを犯さないようにしよう。', options: ['教訓として', 'はじめとして', '抜きにして', 'よそに'], answer: '教訓として', explanation: '「〜を教訓として」表示「以...為教訓」。' },

        // --- Beginner (For N5/N4 pool) ---
        { id: 12, level: 'Beginner', type: '詞彙', question: 'えんぴつで　なまえを　＿＿＿＿ください。', options: ['かいて', 'よんで', 'きいて', 'はなして'], answer: 'かいて', explanation: '「書く」(かく) 的て形是「かいて」，意為「書寫」。' },
        { id: 35, level: 'Beginner', type: '漢字', question: '「休み」の読み方は？', options: ['やすみ', 'きゅうみ', 'きゅうじつ', 'やすむ'], answer: 'やすみ', explanation: '名詞「休み」的讀音是「やすみ」。' },
        { id: 36, level: 'Beginner', type: '文法', question: 'この　りんごは　おいしいです。それ＿＿＿、やすいです。', options: ['から', 'そして', 'でも', 'じゃあ'], answer: 'そして', explanation: '「そして」用來連接兩個語氣順承的句子，表示「而且」。' },
        { id: 37, level: 'Beginner', type: '詞彙', question: 'わたしの　へやは　とても＿＿＿＿です。', options: ['あかるい', 'くろい', 'おもい', 'せまい'], answer: 'あかるい', explanation: '「明るい」是「明亮」的意思，是描述房間的常用形容詞。' }
    ];
    
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
        history: document.getElementById('history-screen')
    };
    const showHistoryBtn = document.getElementById('show-history-btn');
    const backToStartBtn = document.getElementById('back-to-start-btn');
    const historyListContainer = document.getElementById('history-list-container');
    const achievementsContainer = document.getElementById('achievements-container');
    const popup = document.getElementById('achievement-popup');
    const popupClose = document.querySelector('.popup-close');
    
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
        backToStartBtn.addEventListener('click', () => switchScreen(screens.start));
        
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

        const availableQuestions = questionDB.filter(q => q.level === selectedLevel || (selectedLevel === 'Beginner' && (q.level === 'N5' || q.level === 'N4')));
        currentQuizQuestions = availableQuestions.sort(() => 0.5 - Math.random()).slice(0, selectedQuantity);

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