# 🚀 日文學習網頁 - 新功能使用指南

## 📋 更新摘要

我們已經實作了您要求的兩個重要功能：
1. **永久儲存功能** - GAI 生成的題目現在會自動儲存
2. **現代化 API 配置** - 更直觀的 Gemini API 使用方式

---

## 🤖 AI 模型配置升級

### 模型版本更新
- **舊版本**: `gemini-pro`
- **新版本**: `gemini-2.0-flash-exp` (最新實驗模型)
- **配置位置**: `config/apiConfig.js` 第 11 行

### 更直觀的使用方式

**舊方式** (複雜):
```javascript
// 需要手動設定速率限制、錯誤處理等
const apiConfig = new APIConfig();
apiConfig.setGeminiApiKey('your-key');
apiConfig.checkRateLimit(); // 手動檢查
```

**新方式** (簡化):
```javascript
// 類似官方 SDK 的風格
const ai = createGeminiAI('your-api-key', {
    model: 'gemini-2.0-flash-exp',
    enableRateLimit: false // 預設關閉，更直觀
});

// 或者使用內建實例
window.apiConfig.initialize('your-key', { model: 'gemini-pro' });
```

### 主要改進
✅ **預設關閉速率限制** - 更直觀的使用體驗  
✅ **可選擇模型版本** - 支援 `gemini-2.0-flash-exp`, `gemini-pro` 等  
✅ **簡化的 API 調用** - 使用 `generateContent()` 方法  
✅ **類似官方 SDK** - 提供 `createGeminiAI()` 函數  

---

## 💾 永久儲存功能

### 自動儲存機制
🔄 **GAI 生成的題目現在會自動永久儲存到 localStorage**

```javascript
// 生成題目時自動儲存
const questions = await apiConfig.generateQuestions({...});
storageManager.saveGeneratedQuestions(questions); // 自動執行
```

### 儲存容量
- **最大儲存**: 1000 題
- **去重處理**: 自動移除重複題目
- **儲存格式**: JSON 格式，包含完整題目資訊

### 儲存統計
在 **API 設定** 界面可以查看：
- 📊 已儲存題目總數
- 📈 各等級分佈 (N5, N4, N3, N2, N1)
- 🗂️ 各類型分佈 (漢字, 詞彙, 文法, 讀解)
- 🏷️ 來源標記 (static, generated, imported)
- 💽 儲存空間使用量

---

## 📁 題庫管理功能

### 匯出功能
**支援格式:**
- 📄 **JSON 格式** - 完整結構化資料
- 📊 **CSV 格式** - 便於 Excel 處理

**檔案命名:**
- `japanese_quiz_questions_YYYYMMDD.json`
- `japanese_quiz_questions_YYYYMMDD.csv`

### 匯入功能
**支援檔案:**
- ✅ JSON 檔案 (.json)
- ✅ CSV 檔案 (.csv)

**匯入處理:**
- 🔍 自動驗證題目格式
- 🏷️ 標記為 'imported' 來源
- ➕ 自動添加到記憶體題庫
- 📊 更新儲存統計

### 管理操作
- 🗑️ **清除所有儲存題目** (需確認)
- 📊 **即時統計更新**
- 🔄 **自動去重處理**

---

## 🎯 使用流程

### 1. 設定 API
```
進入 "API 設定" → 輸入 Gemini API 金鑰 → 儲存 → 測試連接
```

### 2. 生成題目
```
選擇等級/類型/主題 → 點擊"生成題目" → 自動儲存到本地
```

### 3. 管理題庫
```
查看儲存統計 → 匯出備份 → 匯入題目 → 清除舊題目
```

### 4. 開始測驗
```
選擇等級和題數 → 開始測驗 → 包含生成的題目
```

---

## 🔧 技術升級

### 新增檔案
```
data/storageManager.js    - 儲存管理器
config/apiConfig.js       - 升級的 API 配置 (支援新模型)
```

### 核心改進
- **模組化設計** - 儲存、API、題庫分離
- **錯誤處理** - 完善的異常處理機制
- **使用者體驗** - 即時反饋和統計更新
- **資料安全** - 本地儲存，無需伺服器

---

## 📱 使用建議

### 最佳實務
1. **定期備份** - 使用匯出功能備份題目
2. **合理生成** - 避免過度生成相似題目
3. **分類管理** - 按等級和類型組織題目
4. **空間監控** - 注意儲存空間使用量

### 故障排除
- **儲存失敗** - 檢查瀏覽器儲存權限
- **匯入錯誤** - 確認檔案格式正確
- **API 錯誤** - 檢查網路連接和 API 金鑰

---

## 🎉 總結

現在您的日文學習網頁具備了：
- ✅ **永久儲存** - GAI 題目自動保存
- ✅ **現代化 API** - 更直觀的配置方式  
- ✅ **完整管理** - 匯出/匯入/統計功能
- ✅ **最新模型** - 使用 `gemini-2.0-flash-exp`

您可以安心使用 GAI 功能生成題目，所有內容都會永久保存並可隨時管理！

---

*最後更新: 2025年7月16日*
