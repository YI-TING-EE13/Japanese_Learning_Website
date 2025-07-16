/**
 * 日文能力測驗題庫
 * Japanese Proficiency Test Question Database
 * 
 * 題目格式標準：
 * {
 *   id: number,           // 唯一識別碼
 *   level: string,        // 等級 (N5, N4, N3, N2, N1, Beginner)
 *   type: string,         // 類型 (漢字, 詞彙, 文法, 讀解)
 *   question: string,     // 題目內容
 *   options: string[],    // 選項陣列
 *   answer: string,       // 正確答案
 *   explanation: string,  // 解析說明
 *   topic?: string,       // 主題分類 (可選)
 *   difficulty?: number,  // 難度係數 1-5 (可選)
 *   source?: string,      // 來源標記 (可選: static, generated)
 *   createdAt?: string    // 創建時間 (可選)
 * }
 */

const questionDB = [
    // --- N5 級別題目 ---
    { 
        id: 1, 
        level: 'N5', 
        type: '漢字', 
        question: '「水」の読み方は？', 
        options: ['みず', 'すい', 'みづ', 'すいり'], 
        answer: 'みず', 
        explanation: '「水」在單獨使用時通常讀作「みず」。',
        topic: '基礎漢字',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 2, 
        level: 'N5', 
        type: '詞彙', 
        question: 'わたしは　まいばん　テレビを＿＿＿＿。', 
        options: ['みます', 'ききます', 'よみます', 'たべます'], 
        answer: 'みます', 
        explanation: '「テレビを見る」是「看電視」的固定用法。',
        topic: '日常活動',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 3, 
        level: 'N5', 
        type: '文法', 
        question: 'これは　だれの　かばんです＿＿。', 
        options: ['が', 'を', 'か', 'に'], 
        answer: 'か', 
        explanation: '句尾的「か」表示疑問。',
        topic: '疑問句',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 13, 
        level: 'N5', 
        type: '漢字', 
        question: '「大きい」の読み方は？', 
        options: ['おおきい', 'だいきい', 'たいきい', 'おっきい'], 
        answer: 'おおきい', 
        explanation: '「大きい」的正確讀音是「おおきい」。',
        topic: '形容詞',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 14, 
        level: 'N5', 
        type: '詞彙', 
        question: '駅まで　＿＿＿＿で　行きますか。', 
        options: ['どうして', 'どちら', 'なんで', 'どのように'], 
        answer: 'なんで', 
        explanation: '「なんで」在這裡是口語中詢問方法、手段的「用什麼」。',
        topic: '交通',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 15, 
        level: 'N5', 
        type: '文法', 
        question: '机の　うえ＿＿＿　ねこが　います。', 
        options: ['に', 'で', 'を', 'へ'], 
        answer: 'に', 
        explanation: '助詞「に」用來表示存在的場所。',
        topic: '位置表現',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 16, 
        level: 'N5', 
        type: '詞彙', 
        question: 'きのうは　いい＿＿＿＿でしたね。', 
        options: ['てんき', 'でんき', 'げんき', 'てんし'], 
        answer: 'てんき', 
        explanation: '「いい天気」是「好天氣」的意思。',
        topic: '天氣',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 17, 
        level: 'N5', 
        type: '文法', 
        question: 'すみませんが、ドアを＿＿＿＿ください。', 
        options: ['しめて', 'しめって', 'しめても', 'しめる'], 
        answer: 'しめて', 
        explanation: '「〜てください」前面接動詞的て形，表示請求。',
        topic: '請求表現',
        difficulty: 2,
        source: 'static'
    },

    // --- N4 級別題目 ---
    { 
        id: 4, 
        level: 'N4', 
        type: '詞彙', 
        question: 'この町はとても＿＿＿＿です。', 
        options: ['にぎやか', 'しずか', 'きれい', 'ゆうめい'], 
        answer: 'にぎやか', 
        explanation: '「にぎやか」是「熱鬧」的意思，符合描述城鎮的常用詞。',
        topic: '城市描述',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 5, 
        level: 'N4', 
        type: '文法', 
        question: '明日、雨が＿＿＿＿、試合は中止です。', 
        options: ['降れば', '降って', '降るなら', '降ると'], 
        answer: '降れば', 
        explanation: '「〜ば」用於表示假定條件。如果下雨，比賽就中止。',
        topic: '條件句',
        difficulty: 3,
        source: 'static'
    },
    { 
        id: 6, 
        level: 'N4', 
        type: '漢字', 
        question: '「歌」の動詞形は？', 
        options: ['歌います', '話します', '聞きます', '書きます'], 
        answer: '歌います', 
        explanation: '「歌」的動詞形式是「歌います」(唱歌)。',
        topic: '動詞變化',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 18, 
        level: 'N4', 
        type: '文法', 
        question: '弟は　漢字を　書く＿＿＿が　できます。', 
        options: ['こと', 'もの', 'ほう', 'とき'], 
        answer: 'こと', 
        explanation: '「動詞原形 + ことができます」表示「能夠做某事」。',
        topic: '可能表現',
        difficulty: 3,
        source: 'static'
    },
    { 
        id: 19, 
        level: 'N4', 
        type: '詞彙', 
        question: '問題が＿＿＿＿なので、先生に聞きました。', 
        options: ['かんたん', 'ふくざつ', 'べんり', 'じょうぶ'], 
        answer: 'ふくざつ', 
        explanation: '「複雑」是「複雜」的意思，所以才會去問老師。',
        topic: '問題描述',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 20, 
        level: 'N4', 
        type: '漢字', 
        question: '「旅行」の読み方は？', 
        options: ['りょこう', 'りよこう', 'りこう', 'りょうこ'], 
        answer: 'りょこう', 
        explanation: '「旅行」的正確讀音是「りょこう」。',
        topic: '旅遊',
        difficulty: 2,
        source: 'static'
    },
    { 
        id: 21, 
        level: 'N4', 
        type: '文法', 
        question: '会議の前に、資料を＿＿＿＿おきます。', 
        options: ['読んで', '読むで', '読みて', '読んだ'], 
        answer: '読んで', 
        explanation: '「〜ておきます」表示為將來做準備，前面接動詞て形。',
        topic: '準備表現',
        difficulty: 3,
        source: 'static'
    },

    // --- N3 級別題目 ---
    { 
        id: 7, 
        level: 'N3', 
        type: '文法', 
        question: '彼は病気だった＿＿＿＿、会議に出席した。', 
        options: ['にもかかわらず', 'おかげで', 'せいか', 'わりに'], 
        answer: 'にもかかわらず', 
        explanation: '「〜にもかかわらず」表示「儘管...卻...」，用於前後文意相反的情況。',
        topic: '逆接表現',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 8, 
        level: 'N3', 
        type: '詞彙', 
        question: 'そのニュースを聞いて、＿＿＿＿した。', 
        options: ['がっかり', 'びっくり', 'はっきり', 'うっかり'], 
        answer: 'びっくり', 
        explanation: '「びっくりする」是「嚇一跳、吃驚」的意思。',
        topic: '感情表現',
        difficulty: 3,
        source: 'static'
    },
    { 
        id: 22, 
        level: 'N3', 
        type: '漢字', 
        question: '「案内」の読み方は？', 
        options: ['あんない', 'あない', 'あんねい', 'あんあい'], 
        answer: 'あんない', 
        explanation: '「案内」的正確讀音是「あんない」。',
        topic: '服務用語',
        difficulty: 3,
        source: 'static'
    },
    { 
        id: 23, 
        level: 'N3', 
        type: '文法', 
        question: 'このお寺は、有名＿＿＿＿、いつも人が多い。', 
        options: ['なだけあって', 'なばかりに', 'なものだから', 'なせいか'], 
        answer: 'なだけあって', 
        explanation: '「〜だけあって」表示「不愧是...，正因為...」，前接的理由與後述結果相符。',
        topic: '原因理由',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 24, 
        level: 'N3', 
        type: '詞彙', 
        question: '彼は私の意見に＿＿＿＿してくれた。', 
        options: ['賛成', '反対', '成功', '感謝'], 
        answer: '賛成', 
        explanation: '「賛成する」是「贊成」的意思。',
        topic: '意見表達',
        difficulty: 3,
        source: 'static'
    },
    { 
        id: 40, 
        level: 'N3', 
        type: '讀解', 
        question: '「田中さんは昨日、デパートで青いセーターを買いました。しかし、家に帰って着てみると、思ったよりサイズが小さかったので、今日、交換しに行くつもりです。」この文章の内容と合っているものはどれか。', 
        options: ['田中さんは今日、青いセーターを買う。', '田中さんのセーターは大きすぎた。', '田中さんは昨日、デパートに行った。', '田中さんはセーターを交換できない。'], 
        answer: '田中さんは昨日、デパートに行った。', 
        explanation: '文章第一句明確指出「田中さんは昨日、デパートで青いセーターを買いました」，所以「昨天去了百貨公司」是正確的。',
        topic: '購物',
        difficulty: 4,
        source: 'static'
    },

    // --- N2 級別題目 ---
    { 
        id: 9, 
        level: 'N2', 
        type: '文法', 
        question: 'この問題は難しくて、私には解け＿＿＿＿。', 
        options: ['かねる', 'がたい', 'そうもない', 'きれない'], 
        answer: 'そうもない', 
        explanation: '「〜そうもない」表示「看起來不可能...」，強調可能性極低。',
        topic: '可能性表現',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 25, 
        level: 'N2', 
        type: '詞彙', 
        question: '彼は＿＿＿＿な知識を持っている。', 
        options: ['膨大', '巨大', '拡大', '増大'], 
        answer: '膨大', 
        explanation: '「膨大な知識」是「龐大的知識」的固定搭配。',
        topic: '知識描述',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 26, 
        level: 'N2', 
        type: '文法', 
        question: '一度決めた＿＿＿＿、最後までやり遂げるべきだ。', 
        options: ['以上は', '上は', 'からには', 'ところを'], 
        answer: 'からには', 
        explanation: '「〜からには」表示「既然已經...就理應...」，帶有強烈的決心和義務感。',
        topic: '意志表現',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 27, 
        level: 'N2', 
        type: '漢字', 
        question: '「解決」の同義語はどれか。', 
        options: ['処理', '解釈', '解放', '分析'], 
        answer: '処理', 
        explanation: '「解決」和「処理」都有處理、解決問題的意思，但「処理」更側重於事務性的處理。在此選項中為最佳解。',
        topic: '問題解決',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 28, 
        level: 'N2', 
        type: '詞彙', 
        question: '彼の話は＿＿＿＿があって面白い。', 
        options: ['ユーモア', 'ジョーク', '冗談', 'しゃれ'], 
        answer: 'ユーモア', 
        explanation: '「ユーモア」(humor) 指整體帶有趣味、幽默感，與「話」(談話內容) 搭配最自然。',
        topic: '對話描述',
        difficulty: 4,
        source: 'static'
    },
    { 
        id: 29, 
        level: 'N2', 
        type: '文法', 
        question: '大雨で電車が止まった＿＿＿＿、会議に遅れてしまった。', 
        options: ['あげく', '末に', '結果', 'あまり'], 
        answer: 'あげく', 
        explanation: '「〜あげく」表示「...的結果(通常是不好的結果)」。前面常接長時間或反覆的行為。',
        topic: '結果表現',
        difficulty: 4,
        source: 'static'
    },

    // --- N1 級別題目 ---
    { 
        id: 11, 
        level: 'N1', 
        type: '詞彙', 
        question: '彼の態度は非常に＿＿＿＿だ。', 
        options: ['傲慢（ごうまん）', '謙虚（けんきょ）', '臆病（おくびょう）', '柔軟（じゅうなん）'], 
        answer: '傲慢（ごうまん）', 
        explanation: '「傲慢」意指態度高傲、看不起人。',
        topic: '人格描述',
        difficulty: 5,
        source: 'static'
    },
    { 
        id: 30, 
        level: 'N1', 
        type: '文法', 
        question: 'その作家の最新作は、読む＿＿＿＿傑作だと言われている。', 
        options: ['までもない', 'べくもない', 'にたえない', 'に足る'], 
        answer: 'までもない', 
        explanation: '「〜までもない」表示「連...的必要都沒有」，用來強調事情的顯而易見性。這裡意指「不用讀就知道是傑作」。',
        topic: '評價表現',
        difficulty: 5,
        source: 'static'
    },
    { 
        id: 31, 
        level: 'N1', 
        type: '詞彙', 
        question: '両国間の交渉は＿＿＿＿している。', 
        options: ['難航', '航海', '難行', '運行'], 
        answer: '難航', 
        explanation: '「難航（なんこう）する」常用來比喻事情進展不順利、陷入困境。',
        topic: '國際關係',
        difficulty: 5,
        source: 'static'
    },
    { 
        id: 32, 
        level: 'N1', 
        type: '文法', 
        question: '長年の努力＿＿＿＿、彼はついに夢を実現した。', 
        options: ['の極み', 'をもって', 'の末', 'ならでは'], 
        answer: 'の末', 
        explanation: '「〜の末（すえ）」表示「經過了(長時間的)...之後，最終...」。',
        topic: '時間經過',
        difficulty: 5,
        source: 'static'
    },
    { 
        id: 33, 
        level: 'N1', 
        type: '漢字', 
        question: '「陳腐」の正しい読み方は？', 
        options: ['ちんぷ', 'ちんふ', 'ちんぶ', 'じんぷ'], 
        answer: 'ちんぷ', 
        explanation: '「陳腐」的正確讀音是「ちんぷ」，意指陳腐、老套。',
        topic: '抽象概念',
        difficulty: 5,
        source: 'static'
    },
    { 
        id: 34, 
        level: 'N1', 
        type: '文法', 
        question: '今回の失敗を＿＿＿＿、二度と同じ過ちを犯さないようにしよう。', 
        options: ['教訓として', 'はじめとして', '抜きにして', 'よそに'], 
        answer: '教訓として', 
        explanation: '「〜を教訓として」表示「以...為教訓」。',
        topic: '學習態度',
        difficulty: 5,
        source: 'static'
    },

    // --- Beginner 級別題目 ---
    { 
        id: 12, 
        level: 'Beginner', 
        type: '詞彙', 
        question: 'えんぴつで　なまえを　＿＿＿＿ください。', 
        options: ['かいて', 'よんで', 'きいて', 'はなして'], 
        answer: 'かいて', 
        explanation: '「書く」(かく) 的て形是「かいて」，意為「書寫」。',
        topic: '基礎動作',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 35, 
        level: 'Beginner', 
        type: '漢字', 
        question: '「休み」の読み方は？', 
        options: ['やすみ', 'きゅうみ', 'きゅうじつ', 'やすむ'], 
        answer: 'やすみ', 
        explanation: '名詞「休み」的讀音是「やすみ」。',
        topic: '時間概念',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 36, 
        level: 'Beginner', 
        type: '文法', 
        question: 'この　りんごは　おいしいです。それ＿＿＿、やすいです。', 
        options: ['から', 'そして', 'でも', 'じゃあ'], 
        answer: 'そして', 
        explanation: '「そして」用來連接兩個語氣順承的句子，表示「而且」。',
        topic: '連接詞',
        difficulty: 1,
        source: 'static'
    },
    { 
        id: 37, 
        level: 'Beginner', 
        type: '詞彙', 
        question: 'わたしの　へやは　とても＿＿＿＿です。', 
        options: ['あかるい', 'くろい', 'おもい', 'せまい'], 
        answer: 'あかるい', 
        explanation: '「明るい」是「明亮」的意思，是描述房間的常用形容詞。',
        topic: '居住環境',
        difficulty: 1,
        source: 'static'
    }
];

// 題庫統計函數
const getQuestionStats = () => {
    const stats = {
        total: questionDB.length,
        byLevel: {},
        byType: {},
        byTopic: {},
        byDifficulty: {}
    };

    questionDB.forEach(q => {
        // 按等級統計
        stats.byLevel[q.level] = (stats.byLevel[q.level] || 0) + 1;
        
        // 按類型統計
        stats.byType[q.type] = (stats.byType[q.type] || 0) + 1;
        
        // 按主題統計
        if (q.topic) {
            stats.byTopic[q.topic] = (stats.byTopic[q.topic] || 0) + 1;
        }
        
        // 按難度統計
        if (q.difficulty) {
            stats.byDifficulty[q.difficulty] = (stats.byDifficulty[q.difficulty] || 0) + 1;
        }
    });

    return stats;
};

// 題庫查詢函數
const getQuestionsByLevel = (level) => {
    return questionDB.filter(q => q.level === level);
};

const getQuestionsByType = (type) => {
    return questionDB.filter(q => q.type === type);
};

const getQuestionsByTopic = (topic) => {
    return questionDB.filter(q => q.topic === topic);
};

const getQuestionsByDifficulty = (difficulty) => {
    return questionDB.filter(q => q.difficulty === difficulty);
};

const getRandomQuestions = (level, count, type = null) => {
    let availableQuestions = questionDB.filter(q => {
        if (level === 'Beginner') {
            return q.level === 'Beginner' || q.level === 'N5' || q.level === 'N4';
        }
        return q.level === level;
    });

    if (type) {
        availableQuestions = availableQuestions.filter(q => q.type === type);
    }

    // 隨機排序並選取指定數量
    return availableQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
};

// 導出函數供外部使用
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 環境
    module.exports = {
        questionDB,
        getQuestionStats,
        getQuestionsByLevel,
        getQuestionsByType,
        getQuestionsByTopic,
        getQuestionsByDifficulty,
        getRandomQuestions
    };
} else {
    // 瀏覽器環境
    window.QuestionDatabase = {
        questionDB,
        getQuestionStats,
        getQuestionsByLevel,
        getQuestionsByType,
        getQuestionsByTopic,
        getQuestionsByDifficulty,
        getRandomQuestions
    };
}
