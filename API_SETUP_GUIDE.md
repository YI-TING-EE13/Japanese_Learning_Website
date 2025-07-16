# API 設定指南 (API Configuration Guide)

## Gemini API 設定步驟

### 1. 取得 API 金鑰 (Getting API Key)

1. 訪問 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 使用 Google 帳戶登入
3. 點擊 "Create API Key" 按鈕
4. 選擇或創建一個 Google Cloud 項目
5. 複製生成的 API 金鑰

### 2. 在應用程式中設定 (Setting up in Application)

1. 開啟日語學習應用程式
2. 點擊首頁的 "API 設定" 按鈕
3. 在 "API 金鑰" 欄位中貼上您的金鑰
4. 點擊 "儲存金鑰" 按鈕
5. 點擊 "測試連接" 確認設定成功

### 3. 使用題目生成器 (Using Question Generator)

1. 在設定頁面的 "題目生成器" 區塊中：
   - 選擇 JLPT 等級 (N5-N1)
   - 選擇題目類型 (漢字、詞彙、文法、讀解)
   - 輸入主題 (可選，例如：食物、交通、工作)
   - 設定生成數量 (1-5 題)

2. 點擊 "生成題目" 按鈕
3. 查看生成的題目並確認品質
4. 生成的題目會自動添加到題庫中

## API 使用限制 (Usage Limits)

- **速率限制**: 每分鐘最多 10 次請求
- **成本**: Gemini API 提供免費額度，超出後可能收費
- **安全性**: API 金鑰存儲在本地瀏覽器中

## 故障排除 (Troubleshooting)

### 常見問題

1. **連接測試失敗**
   - 檢查網路連接
   - 確認 API 金鑰正確
   - 檢查 API 額度是否已用完

2. **題目生成失敗**
   - 檢查速率限制 (每分鐘不超過 10 次)
   - 確認請求參數設定正確
   - 重新測試 API 連接

3. **API 金鑰問題**
   - 確認金鑰沒有額外空格
   - 檢查金鑰是否有效且未過期
   - 嘗試重新生成金鑰

### 錯誤代碼

- **400**: 請求格式錯誤
- **401**: API 金鑰無效
- **403**: 權限不足或額度用完
- **429**: 超出速率限制
- **500**: 服務器內部錯誤

## 隱私與安全 (Privacy & Security)

- API 金鑰儲存在本地瀏覽器的 localStorage 中
- 不會上傳至任何第三方服務器
- 建議定期更換 API 金鑰
- 生成的題目僅保存在本地設備

## 進階設定 (Advanced Configuration)

### 自定義提示詞

可以修改 `config/apiConfig.js` 中的 `buildQuestionPrompt` 函數來調整 AI 生成題目的風格和要求。

### 修改速率限制

在 `config/apiConfig.js` 中調整：
```javascript
this.rateLimitWindow = 60000; // 時間窗口 (毫秒)
this.rateLimitMax = 10;       // 最大請求數
```

### 添加其他 AI 服務

可以擴展 `APIConfig` 類來支援其他語言模型 API。

---

**注意**: 使用 AI 生成功能需要穩定的網路連接和有效的 API 金鑰。
