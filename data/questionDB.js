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
    // --- N5 級別題目 (原有) ---
    { id: 1, level: 'N5', type: '漢字', question: '「水」の読み方は？', options: ['みず', 'すい', 'みづ', 'すいり'], answer: 'みず', explanation: '「水」在單獨使用時通常讀作「みず」。', topic: '基礎漢字', difficulty: 1, source: 'static' },
    { id: 2, level: 'N5', type: '詞彙', question: 'わたしは　まいばん　テレビを＿＿＿＿。', options: ['みます', 'ききます', 'よみます', 'たべます'], answer: 'みます', explanation: '「テレビを見る」是「看電視」的固定用法。', topic: '日常活動', difficulty: 1, source: 'static' },
    { id: 3, level: 'N5', type: '文法', question: 'これは　だれの　かばんです＿＿。', options: ['が', 'を', 'か', 'に'], answer: 'か', explanation: '句尾的「か」表示疑問。', topic: '疑問句', difficulty: 1, source: 'static' },
    { id: 13, level: 'N5', type: '漢字', question: '「大きい」の読み方は？', options: ['おおきい', 'だいきい', 'たいきい', 'おっきい'], answer: 'おおきい', explanation: '「大きい」的正確讀音是「おおきい」。', topic: '形容詞', difficulty: 1, source: 'static' },
    { id: 14, level: 'N5', type: '詞彙', question: '駅まで　＿＿＿＿で　行きますか。', options: ['どうして', 'どちら', 'なんで', 'どのように'], answer: 'なんで', explanation: '「なんで」在這裡是口語中詢問方法、手段的「用什麼」。', topic: '交通', difficulty: 2, source: 'static' },
    { id: 15, level: 'N5', type: '文法', question: '机の　うえ＿＿＿　ねこが　います。', options: ['に', 'で', 'を', 'へ'], answer: 'に', explanation: '助詞「に」用來表示存在的場所。', topic: '位置表現', difficulty: 2, source: 'static' },
    { id: 16, level: 'N5', type: '詞彙', question: 'きのうは　いい＿＿＿＿でしたね。', options: ['てんき', 'でんき', 'げんき', 'てんし'], answer: 'てんき', explanation: '「いい天気」是「好天氣」的意思。', topic: '天氣', difficulty: 1, source: 'static' },
    { id: 17, level: 'N5', type: '文法', question: 'すみませんが、ドアを＿＿＿＿ください。', options: ['しめて', 'しめって', 'しめても', 'しめる'], answer: 'しめて', explanation: '「〜てください」前面接動詞的て形，表示請求。', topic: '請求表現', difficulty: 2, source: 'static' },

    // --- N5 級別題目 (新增) ---
    { id: 41, level: 'N5', type: '漢字', question: '「山」の読み方は？', options: ['やま', 'さん', 'せん', 'ざん'], answer: 'やま', explanation: '「山」的訓讀是「やま」。', topic: '自然', difficulty: 1, source: 'static' },
    { id: 42, level: 'N5', type: '文法', question: '私も学生です。田中さん＿＿＿学生です。', options: ['も', 'は', 'が', 'と'], answer: 'も', explanation: '助詞「も」用來表示「也」，表示與前述情況相同。', topic: '助詞', difficulty: 1, source: 'static' },
    { id: 43, level: 'N5', type: '詞彙', question: 'あなたの＿＿＿＿は何人ですか。', options: ['かぞく', 'きょうだい', 'ともだち', 'せんせい'], answer: 'かぞく', explanation: '「家族（かぞく）」是「家人」的意思。', topic: '家庭', difficulty: 1, source: 'static' },
    { id: 44, level: 'N5', type: '文法', question: 'きのうのパーティーはとても＿＿＿＿。', options: ['たのしかったです', 'たのしいでした', 'たのしいです', 'たのしいかった'], answer: 'たのしかったです', explanation: 'い形容詞的過去式是將「い」改成「かった」+「です」。', topic: '形容詞過去式', difficulty: 2, source: 'static' },
    { id: 45, level: 'N5', type: '漢字', question: '「一」から「三」まで数えてください。', options: ['いち、に、さん', 'ひと、ふた、み', 'かず、に、さん', 'いち、じ、さん'], answer: 'いち、に、さん', explanation: '數字一、二、三的音讀分別是「いち、に、さん」。', topic: '數字', difficulty: 1, source: 'static' },
    { id: 46, level: 'N5', type: '詞彙', question: 'この道をまっすぐ行って、＿＿＿に曲がってください。', options: ['みぎ', 'ひだり', 'うえ', 'した'], answer: 'みぎ', explanation: '「右（みぎ）」是「右邊」的意思，與「左（ひだり）」是相對方向。', topic: '方向', difficulty: 2, source: 'static' },
    { id: 47, level: 'N5', type: '文法', question: '私はすしが＿＿＿＿。', options: ['食べたいです', '食べますです', '食べたい', '食べたいでした'], answer: '食べたいです', explanation: '「動詞ます形去ます + たいです」表示「想做某事」。', topic: '願望表現', difficulty: 2, source: 'static' },
    { id: 48, level: 'N5', type: '詞彙', question: 'すみません、＿＿＿をください。', options: ['おみず', 'ごはん', 'おかね', 'じかん'], answer: 'おみず', explanation: '「お水」是「水」的禮貌說法，是店裡常見的請求。', topic: '餐飲', difficulty: 1, source: 'static' },
    { id: 49, level: 'N5', type: '漢字', question: '「日本」はどこですか。', options: ['にほん', 'にっぽん', 'にほん、にっぽん両方', 'にちほん'], answer: 'にほん、にっぽん両方', explanation: '「日本」有「にほん」和「にっぽん」兩種正式讀音。', topic: '國名', difficulty: 2, source: 'static' },
    { id: 50, level: 'N5', type: '文法', question: '毎日、＿＿＿で学校へ行きます。', options: ['バス', 'くるま', 'じてんしゃ', '上記すべて'], answer: '上記すべて', explanation: '助詞「で」可以表示交通方式，所以巴士、汽車、自行車都適用。', topic: '交通工具', difficulty: 2, source: 'static' },
    
    // --- N4 級別題目 (原有) ---
    { id: 4, level: 'N4', type: '詞彙', question: 'この町はとても＿＿＿＿です。', options: ['にぎやか', 'しずか', 'きれい', 'ゆうめい'], answer: 'にぎやか', explanation: '「にぎやか」是「熱鬧」的意思，符合描述城鎮的常用詞。', topic: '城市描述', difficulty: 2, source: 'static' },
    { id: 5, level: 'N4', type: '文法', question: '明日、雨が＿＿＿＿、試合は中止です。', options: ['降れば', '降って', '降るなら', '降ると'], answer: '降れば', explanation: '「〜ば」用於表示假定條件。如果下雨，比賽就中止。', topic: '條件句', difficulty: 3, source: 'static' },
    { id: 6, level: 'N4', type: '漢字', question: '「歌」の動詞形は？', options: ['歌います', '話します', '聞きます', '書きます'], answer: '歌います', explanation: '「歌」的動詞形式是「歌います」(唱歌)。', topic: '動詞變化', difficulty: 2, source: 'static' },
    { id: 18, level: 'N4', type: '文法', question: '弟は　漢字を　書く＿＿＿が　できます。', options: ['こと', 'もの', 'ほう', 'とき'], answer: 'こと', explanation: '「動詞原形 + ことができます」表示「能夠做某事」。', topic: '可能表現', difficulty: 3, source: 'static' },
    { id: 19, level: 'N4', type: '詞彙', question: '問題が＿＿＿＿なので、先生に聞きました。', options: ['かんたん', 'ふくざつ', 'べんり', 'じょうぶ'], answer: 'ふくざつ', explanation: '「複雑」是「複雜」的意思，所以才會去問老師。', topic: '問題描述', difficulty: 2, source: 'static' },
    { id: 20, level: 'N4', type: '漢字', question: '「旅行」の読み方は？', options: ['りょこう', 'りよこう', 'りこう', 'りょうこ'], answer: 'りょこう', explanation: '「旅行」的正確讀音是「りょこう」。', topic: '旅遊', difficulty: 2, source: 'static' },
    { id: 21, level: 'N4', type: '文法', question: '会議の前に、資料を＿＿＿＿おきます。', options: ['読んで', '読むで', '読みて', '読んだ'], answer: '読んで', explanation: '「〜ておきます」表示為將來做準備，前面接動詞て形。', topic: '準備表現', difficulty: 3, source: 'static' },
    
    // --- N4 級別題目 (新增) ---
    { id: 51, level: 'N4', type: '文法', question: '私は日本語が少し＿＿＿＿。', options: ['話せます', '話します', '話しました', '話せません'], answer: '話せます', explanation: '「話せます」是「話す」的可能性，表示「能夠說」。', topic: '可能表現', difficulty: 3, source: 'static' },
    { id: 52, level: 'N4', type: '詞彙', question: '彼の＿＿＿＿を聞かせてください。', options: ['いけん', 'しゅみ', 'よてい', 'けいけん'], answer: 'いけん', explanation: '「意見（いけん）」是「意見」的意思。', topic: '意見表達', difficulty: 3, source: 'static' },
    { id: 53, level: 'N4', type: '漢字', question: '「建物」の読み方は？', options: ['たてもの', 'けんぶつ', 'けんもの', 'たてぶつ'], answer: 'たてもの', explanation: '「建物」的正確讀音是「たてもの」。', topic: '居住環境', difficulty: 2, source: 'static' },
    { id: 54, level: 'N4', type: '文法', question: '友達の誕生日なので、プレゼントを＿＿＿＿。', options: ['あげようと思っています', 'もらおうと思っています', 'くれようと思っています', 'いただこうと思っています'], answer: 'あげようと思っています', explanation: '「あげる」表示自己給予別人。「〜ようと思っています」表示打算。', topic: '授受動詞', difficulty: 3, source: 'static' },
    { id: 55, level: 'N4', 'type': '詞彙', question: '田中さんはとても＿＿＿＿な人です。', options: ['しんせつ', 'あんぜん', 'ていねい', 'しつれい'], answer: 'しんせつ', explanation: '「親切（しんせつ）」是「親切、熱心」的意思。', topic: '人格描述', difficulty: 2, source: 'static' },
    { id: 56, level: 'N4', type: '文法', question: 'もう遅いから、寝＿＿＿＿。', options: ['よう', 'ます', 'たい', 'ましょう'], answer: 'よう', explanation: '動詞的意向形（Volitional form）用來表示「讓我們做...吧」或「我打算做...」。寢る的意向形是寢よう。', topic: '意志表現', difficulty: 3, source: 'static' },
    { id: 57, level: 'N4', type: '漢字', question: '「図書館」で本を借ります。', options: ['としょかん', 'としょがん', 'ずしょかん', 'じしょかん'], answer: 'としょかん', explanation: '「図書館」的正確讀音是「としょかん」。', topic: '公共設施', difficulty: 2, source: 'static' },
    { id: 58, level: 'N4', type: '詞彙', question: 'ホテルの＿＿＿＿をしましたか。', options: ['よやく', 'やくそく', 'よてい', 'ようじ'], answer: 'よやく', explanation: '「予約（よやく）」是「預約」的意思，用於預約飯店、餐廳等。', topic: '旅遊', difficulty: 3, source: 'static' },
    { id: 59, level: 'N4', type: '文法', question: '時間があっ＿＿＿、映画を見に行きたいです。', options: ['たら', 'なら', 'ば', 'と'], answer: 'たら', explanation: '「〜たら」是用於假定條件的廣泛用法，表示「如果...的話」。', topic: '條件句', difficulty: 3, source: 'static' },
    { id: 60, level: 'N4', type: '讀解', question: '「来週の月曜日、午前１０時から会議があります。場所は３階の会議室です。参加者は資料を読んでおいてください。」このメモの内容と違うものはどれか。', options: ['会議は午後にある。', '会議は月曜日だ。', '場所は３階の会議室だ。', '資料を読んでおく必要がある。'], answer: '会議は午後にある。', explanation: '文章明確指出會議時間是「午前１０時」，也就是上午，因此「下午開會」是錯誤的。', topic: '公告理解', difficulty: 3, source: 'static' },
    
    // --- N3 級別題目 (原有) ---
    { id: 7, level: 'N3', type: '文法', question: '彼は病気だった＿＿＿＿、会議に出席した。', options: ['にもかかわらず', 'おかげで', 'せいか', 'わりに'], answer: 'にもかかわらず', explanation: '「〜にもかかわらず」表示「儘管...卻...」，用於前後文意相反的情況。', topic: '逆接表現', difficulty: 4, source: 'static' },
    { id: 8, level: 'N3', type: '詞彙', question: 'そのニュースを聞いて、＿＿＿＿した。', options: ['がっかり', 'びっくり', 'はっきり', 'うっかり'], answer: 'びっくり', explanation: '「びっくりする」是「嚇一跳、吃驚」的意思。', topic: '感情表現', difficulty: 3, source: 'static' },
    { id: 22, level: 'N3', type: '漢字', question: '「案内」の読み方は？', options: ['あんない', 'あない', 'あんねい', 'あんあい'], answer: 'あんない', explanation: '「案内」的正確讀音是「あんない」。', topic: '服務用語', difficulty: 3, source: 'static' },
    { id: 23, level: 'N3', type: '文法', question: 'このお寺は、有名＿＿＿＿、いつも人が多い。', options: ['なだけあって', 'なばかりに', 'なものだから', 'なせいか'], answer: 'なだけあって', explanation: '「〜だけあって」表示「不愧是...，正因為...」，前接的理由與後述結果相符。', topic: '原因理由', difficulty: 4, source: 'static' },
    { id: 24, level: 'N3', type: '詞彙', question: '彼は私の意見に＿＿＿＿してくれた。', options: ['賛成', '反対', '成功', '感謝'], answer: '賛成', explanation: '「賛成する」是「贊成」的意思。', topic: '意見表達', difficulty: 3, source: 'static' },
    { id: 40, level: 'N3', type: '讀解', question: '「田中さんは昨日、デパートで青いセーターを買いました。しかし、家に帰って着てみると、思ったよりサイズが小さかったので、今日、交換しに行くつもりです。」この文章の内容と合っているものはどれか。', options: ['田中さんは今日、青いセーターを買う。', '田中さんのセーターは大きすぎた。', '田中さんは昨日、デパートに行った。', '田中さんはセーターを交換できない。'], answer: '田中さんは昨日、デパートに行った。', explanation: '文章第一句明確指出「田中さんは昨日、デパートで青いセーターを買いました」，所以「昨天去了百貨公司」是正確的。', topic: '購物', difficulty: 4, source: 'static' },

    // --- N3 級別題目 (新增) ---
    { id: 61, level: 'N3', type: '文法', question: '忘れない＿＿＿、メモしておこう。', options: ['うちに', 'あいだに', 'まえに', 'ときに'], answer: 'うちに', explanation: '「〜うちに」表示「趁著...（狀態未改變）的時候」。這裡指趁著還沒忘記的時候。', topic: '時間表現', difficulty: 4, source: 'static' },
    { id: 62, level: 'N3', type: '詞彙', question: '新しいアプリを＿＿＿している。', options: ['かいはつ', 'はっけん', 'はつめい', 'はってん'], answer: 'かいはつ', explanation: '「開発（かいはつ）」指開發新技術或產品。', topic: '科技', difficulty: 3, source: 'static' },
    { id: 63, level: 'N3', type: '漢字', question: '「説明」の読み方は？', options: ['せつめい', 'せじめい', 'ぜつめい', 'しょうめい'], answer: 'せつめい', explanation: '「説明」的正確讀音是「せつめい」。', topic: '溝通', difficulty: 3, source: 'static' },
    { id: 64, level: 'N3', type: '文法', question: '弟にケーキを全部＿＿＿＿。', options: ['食べられた', '食べさせた', '食べさせたかった', '食べたがられた'], answer: '食べられた', explanation: '這裡是「受身形（被動態）」，表示自己是受害者，蛋糕被弟弟吃掉了。', topic: '被動態', difficulty: 4, source: 'static' },
    { id: 65, level: 'N3', type: '詞彙', question: '睡眠不足は健康に悪い＿＿＿を与える。', options: ['えいきょう', 'かんけい', 'こうか', 'かんじょう'], answer: 'えいきょう', explanation: '「影響（えいきょう）を与える」是「給予影響」的固定用法。', topic: '健康', difficulty: 4, source: 'static' },
    { id: 66, level: 'N3', type: '文法', question: '先生はもうお帰りに＿＿＿＿か。', options: ['なりました', 'しました', 'いたしました', 'なさいました'], answer: 'なりました', explanation: '「お＋動詞ます形去ます＋になる」是尊敬語的基本句型。', topic: '敬語', difficulty: 4, source: 'static' },
    { id: 67, level: 'N3', type: '漢字', question: '「目的」を達成するために努力する。', options: ['もくてき', 'もくでき', 'もくひょう', 'もくじき'], answer: 'もくてき', explanation: '「目的」的正確讀音是「もくてき」。', topic: '目標', difficulty: 3, source: 'static' },
    { id: 68, level: 'N3', type: '詞彙', question: 'もっと＿＿＿な例をあげてください。', options: ['ぐたいてき', 'しょうきょくてき', 'せっきょくてき', 'きほんてき'], answer: 'ぐたいてき', explanation: '「具体的（ぐたいてき）」是「具體的」的意思。', topic: '說明', difficulty: 3, source: 'static' },
    { id: 69, level: 'N3', type: '文法', question: '彼はきっと時間通りに来る＿＿＿だ。', options: ['はず', 'べき', 'わけ', 'よう'], answer: 'はず', explanation: '「〜はずだ」表示有充分理由確信某事會發生。', topic: '推量', difficulty: 4, source: 'static' },
    { id: 70, level: 'N3', type: '詞彙', question: '景気は＿＿＿回復している。', options: ['じょじょに', 'とうとう', 'だんだん', 'ますます'], answer: 'じょじょに', explanation: '「徐々に（じょじょに）」是書面語，表示「慢慢地、逐漸地」。', topic: '經濟', difficulty: 4, source: 'static' },
    
    // --- N2 級別題目 (原有) ---
    { id: 9, level: 'N2', type: '文法', question: 'この問題は難しくて、私には解け＿＿＿＿。', options: ['かねる', 'がたい', 'そうもない', 'きれない'], answer: 'そうもない', explanation: '「〜そうもない」表示「看起來不可能...」，強調可能性極低。', topic: '可能性表現', difficulty: 4, source: 'static' },
    { id: 25, level: 'N2', type: '詞彙', question: '彼は＿＿＿＿な知識を持っている。', options: ['膨大', '巨大', '拡大', '増大'], answer: '膨大', explanation: '「膨大な知識」是「龐大的知識」的固定搭配。', topic: '知識描述', difficulty: 4, source: 'static' },
    { id: 26, level: 'N2', type: '文法', question: '一度決めた＿＿＿＿、最後までやり遂げるべきだ。', options: ['以上は', '上は', 'からには', 'ところを'], answer: 'からには', explanation: '「〜からには」表示「既然已經...就理應...」，帶有強烈的決心和義務感。', topic: '意志表現', difficulty: 4, source: 'static' },
    { id: 27, level: 'N2', type: '漢字', question: '「解決」の同義語はどれか。', options: ['処理', '解釈', '解放', '分析'], answer: '処理', explanation: '「解決」和「処理」都有處理、解決問題的意思，但「処理」更側重於事務性的處理。在此選項中為最佳解。', topic: '問題解決', difficulty: 4, source: 'static' },
    { id: 28, level: 'N2', type: '詞彙', question: '彼の話は＿＿＿＿があって面白い。', options: ['ユーモア', 'ジョーク', '冗談', 'しゃれ'], answer: 'ユーモア', explanation: '「ユーモア」(humor) 指整體帶有趣味、幽默感，與「話」(談話內容) 搭配最自然。', topic: '對話描述', difficulty: 4, source: 'static' },
    { id: 29, level: 'N2', type: '文法', question: '大雨で電車が止まった＿＿＿＿、会議に遅れてしまった。', options: ['あげく', '末に', '結果', 'あまり'], answer: 'あげく', explanation: '「〜あげく」表示「...的結果(通常是不好的結果)」。前面常接長時間或反覆的行為。', topic: '結果表現', difficulty: 4, source: 'static' },
    
    // --- N2 級別題目 (新增) ---
    { id: 71, level: 'N2', type: '文法', question: 'お金があれば幸せになれるという＿＿＿＿ではない。', options: ['わけではない', 'はずではない', 'ことではない', 'ものではない'], answer: 'わけではない', explanation: '「〜というわけではない」表示「並非...」，用於部分否定。', topic: '部分否定', difficulty: 4, source: 'static' },
    { id: 72, level: 'N2', type: '詞彙', question: '彼の指示は＿＿＿で、よくわからなかった。', options: ['あいまい', 'あんい', 'おだやか', 'あざやか'], answer: 'あいまい', explanation: '「曖昧（あいまい）」是「模糊不清」的意思。', topic: '溝通', difficulty: 4, source: 'static' },
    { id: 73, level: 'N2', type: '漢字', question: '仕事の「効率」を上げる。', options: ['こうりつ', 'ききりつ', 'のうりつ', 'こうそく'], answer: 'こうりつ', explanation: '「効率」的正確讀音是「こうりつ」。', topic: '工作', difficulty: 4, source: 'static' },
    { id: 74, level: 'N2', type: '文法', question: 'あんな人に負ける＿＿＿＿！', options: ['ものか', 'ことか', 'わけか', 'ところか'], answer: 'ものか', explanation: '「〜ものか」表示強烈的否定，「絕不...」、「怎麼可能...」。', topic: '強烈否定', difficulty: 5, source: 'static' },
    { id: 75, level: 'N2', type: '詞彙', question: '彼は最近、＿＿＿＿にジムに通っている。', options: ['ひんぱんに', 'しょうしょう', 'たびたび', 'しばしば'], answer: 'ひんぱんに', explanation: '「頻繁に（ひんぱんに）」是「頻繁地」的意思。', topic: '頻率', difficulty: 4, source: 'static' },
    { id: 76, level: 'N2', type: '文法', question: '上司の命令なので、いやでも実行せ＿＿＿＿。', options: ['ざるを得ない', 'ざるをえない', 'ざるおえない', 'ざるをえない'], answer: 'ざるを得ない', explanation: '「〜ざるを得ない」表示「不得不...」，動詞ない形去ない＋ざるを得ない。', topic: '義務', difficulty: 5, source: 'static' },
    { id: 77, level: 'N2', type: '漢字', question: '社会に「貢献」する。', options: ['こうけん', 'きょうけん', 'こうきん', 'くうけん'], answer: 'こうけん', explanation: '「貢献」的正確讀音是「こうけん」。', topic: '社會活動', difficulty: 4, source: 'static' },
    { id: 78, level: 'N2', type: '詞彙', question: 'この計画には多くの＿＿＿＿がある。', options: ['メリット', 'チャンス', 'プラス', 'ボーナス'], answer: 'メリット', explanation: '「メリット」來自英文merit，指「優點、好處」。', topic: '商業', difficulty: 4, source: 'static' },
    { id: 79, level: 'N2', type: '文法', question: '彼は部屋に入った＿＿＿、一度も出てこない。', options: ['きり', 'だけ', 'ばかり', 'のみ'], answer: 'きり', explanation: '「〜たきり」表示「自從...之後，就一直...（沒有變化）」。', topic: '持續狀態', difficulty: 5, source: 'static' },
    { id: 80, level: 'N2', type: '讀解', question: '「近年、スマートフォンの普及により、人々の読書時間は減少傾向にあると言われる。しかし、電子書籍の市場は拡大しており、一概に『読書離れ』が進んでいるとは言えない側面もある。」この文章の主なテーマは何か。', options: ['読書時間とスマートフォンの関係', '電子書籍市場の問題点', 'スマートフォンの普及率', '若者の活字離れ'], answer: '読書時間とスマートフォンの関係', explanation: '文章主要探討了智慧型手機普及後，對人們閱讀習慣（包括紙本和電子書）產生的複雜影響。', topic: '社會趨勢', difficulty: 4, source: 'static' },

    // --- N1 級別題目 (原有) ---
    { id: 11, level: 'N1', type: '詞彙', question: '彼の態度は非常に＿＿＿＿だ。', options: ['傲慢（ごうまん）', '謙虚（けんきょ）', '臆病（おくびょう）', '柔軟（じゅうなん）'], answer: '傲慢（ごうまん）', explanation: '「傲慢」意指態度高傲、看不起人。', topic: '人格描述', difficulty: 5, source: 'static' },
    { id: 30, level: 'N1', type: '文法', question: 'その作家の最新作は、読む＿＿＿＿傑作だと言われている。', options: ['までもない', 'べくもない', 'にたえない', 'に足る'], answer: 'までもない', explanation: '「〜までもない」表示「連...的必要都沒有」，用來強調事情的顯而易見性。這裡意指「不用讀就知道是傑作」。', topic: '評價表現', difficulty: 5, source: 'static' },
    { id: 31, level: 'N1', type: '詞彙', question: '両国間の交渉は＿＿＿＿している。', options: ['難航', '航海', '難行', '運行'], answer: '難航', explanation: '「難航（なんこう）する」常用來比喻事情進展不順利、陷入困境。', topic: '國際關係', difficulty: 5, source: 'static' },
    { id: 32, level: 'N1', type: '文法', question: '長年の努力＿＿＿＿、彼はついに夢を実現した。', options: ['の極み', 'をもって', 'の末', 'ならでは'], answer: 'の末', explanation: '「〜の末（すえ）」表示「經過了(長時間的)...之後，最終...」。', topic: '時間經過', difficulty: 5, source: 'static' },
    { id: 33, level: 'N1', type: '漢字', question: '「陳腐」の正しい読み方は？', options: ['ちんぷ', 'ちんふ', 'ちんぶ', 'じんぷ'], answer: 'ちんぷ', explanation: '「陳腐」的正確讀音是「ちんぷ」，意指陳腐、老套。', topic: '抽象概念', difficulty: 5, source: 'static' },
    { id: 34, level: 'N1', type: '文法', question: '今回の失敗を＿＿＿＿、二度と同じ過ちを犯さないようにしよう。', options: ['教訓として', 'はじめとして', '抜きにして', 'よそに'], answer: '教訓として', explanation: '「〜を教訓として」表示「以...為教訓」。', topic: '學習態度', difficulty: 5, source: 'static' },

    // --- N1 級別題目 (新增) ---
    { id: 81, level: 'N1', type: '文法', question: '大会が成功するかどうかは、天気＿＿＿だ。', options: ['いかんだ', 'しだいだ', 'ばかりだ', 'きりだ'], answer: 'いかんだ', explanation: '「〜いかんだ」表示「取決於...」、「要看...而定」，是比較書面的用法。', topic: '條件決定', difficulty: 5, source: 'static' },
    { id: 82, level: 'N1', type: '詞彙', question: '問題の解決策を＿＿＿する。', options: ['模索（もさく）', '追求（ついきゅう）', '探索（たんさく）', '捜査（そうさ）'], answer: '模索（もさく）', explanation: '「模索」指在不明朗的情況下，摸索探求解決之道。', topic: '問題解決', difficulty: 5, source: 'static' },
    { id: 83, level: 'N1', type: '漢字', question: '将来に対する「懸念」を抱く。', options: ['けねん', 'けんあん', 'けんねん', 'けあん'], answer: 'けねん', explanation: '「懸念」的正確讀音是「けねん」，表示擔心、掛念。', topic: '心理狀態', difficulty: 5, source: 'static' },
    { id: 84, level: 'N1', type: '文法', question: '彼は新しいことを覚える＿＿＿、忘れていく。', options: ['そばから', 'やいなや', 'が早いか', 'なり'], answer: 'そばから', explanation: '「〜そばから」表示一個動作剛完成，另一個（通常是不希望的）動作就馬上發生，帶有反覆、無奈的語氣。', topic: '即時發生', difficulty: 5, source: 'static' },
    { id: 85, level: 'N1', type: '詞彙', question: '制度を＿＿＿的に改革する必要がある。', options: ['抜本（ばっぽん）', '根本（こんぽん）', '基礎（きそ）', '根拠（こんきょ）'], answer: '抜本（ばっぽん）', explanation: '「抜本的」指從根本上進行的、徹底的改革。', topic: '社會改革', difficulty: 5, source: 'static' },
    { id: 86, level: 'N1', type: '文法', question: '彼の不幸な身の上話を聞き、同情＿＿＿＿。', options: ['を禁じ得ない', 'に堪えない', 'を余儀なくされる', 'の極みである'], answer: 'を禁じ得ない', explanation: '「〜を禁じ得ない」是書面語，表示「禁不住...」、「忍不住...」的感情。', topic: '感情流露', difficulty: 5, source: 'static' },
    { id: 87, level: 'N1', type: '漢字', question: '両者の意見は「微妙」に違う。', options: ['びみょう', 'みみょう', 'びしょう', 'みびょう'], answer: 'びみょう', explanation: '「微妙」的正確讀音是「びみょう」，指難以言喻的細微差別。', topic: '細微差別', difficulty: 5, source: 'static' },
    { id: 88, level: 'N1', type: '詞彙', question: 'このシステムの＿＿＿性を改善する必要がある。', options: ['脆弱（ぜいじゃく）', '軟弱（なんじゃく）', '貧弱（ひんじゃく）', '薄弱（はくじゃく）'], answer: '脆弱（ぜいじゃく）', explanation: '「脆弱性」常用於IT領域，指系統的弱點、漏洞。', topic: '科技', difficulty: 5, source: 'static' },
    { id: 89, level: 'N1', type: '文法', question: 'このような美しい景色を独り占めできるとは、贅沢＿＿＿＿。', options: ['の極みだ', 'きわまりない', 'の至りだ', 'といったらありゃしない'], answer: 'の極みだ', explanation: '「〜の極みだ」表示「...的極致」，通常接在好的事物後面。', topic: '最高級評價', difficulty: 5, source: 'static' },
    { id: 90, level: 'N1', type: '讀解', question: '「グローバル化の進展は、文化の均質化を促進する一方で、異文化への理解を深める機会をもたらすという二律背反の側面を持つ。」この文で筆者が述べたいことは何か。', options: ['グローバル化は文化の多様性を失わせる。', 'グローバル化は異文化理解を促進する。', 'グローバル化には正と負の両側面がある。', 'グローバル化は避けるべき現象である。'], answer: 'グローバル化には正と負の両側面がある。', explanation: '「一方で」和「二律背反」是關鍵詞，表明作者在論述全球化同時帶來的正面（機會）與負面（均質化）的雙重影響。', topic: '評論分析', difficulty: 5, source: 'static' },

    // --- Beginner 級別題目 (維持原有) ---
    { id: 12, level: 'Beginner', type: '詞彙', question: 'えんぴつで　なまえを　＿＿＿＿ください。', options: ['かいて', 'よんで', 'きいて', 'はなして'], answer: 'かいて', explanation: '「書く」(かく) 的て形是「かいて」，意為「書寫」。', topic: '基礎動作', difficulty: 1, source: 'static' },
    { id: 35, level: 'Beginner', type: '漢字', question: '「休み」の読み方は？', options: ['やすみ', 'きゅうみ', 'きゅうじつ', 'やすむ'], answer: 'やすみ', explanation: '名詞「休み」的讀音是「やすみ」。', topic: '時間概念', difficulty: 1, source: 'static' },
    { id: 36, level: 'Beginner', type: '文法', question: 'この　りんごは　おいしいです。それ＿＿＿、やすいです。', options: ['から', 'そして', 'でも', 'じゃあ'], answer: 'そして', explanation: '「そして」用來連接兩個語氣順承的句子，表示「而且」。', topic: '連接詞', difficulty: 1, source: 'static' },
    { id: 37, level: 'Beginner', type: '詞彙', question: 'わたしの　へやは　とても＿＿＿＿です。', options: ['あかるい', 'くろい', 'おもい', 'せまい'], answer: 'あかるい', explanation: '「明るい」是「明亮」的意思，是描述房間的常用形容詞。', topic: '居住環境', difficulty: 1, source: 'static' }
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
            return q.level === 'Beginner' || q.level === 'N5';
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
    // **注意**：在瀏覽器中，你需要通過 <script> 標籤引入這個文件
    // 然後可以通過 window.QuestionDatabase 來訪問這些內容
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