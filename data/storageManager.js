/**
 * Question Database Storage Manager
 * 
 * @fileoverview Provides persistent storage functionality for Japanese learning questions
 * including local storage, synchronization, merging, and import/export capabilities.
 * 
 * @author Japanese Learning Web App
 * @version 2.0.0
 * @since 1.0.0
 * 
 * @description This module handles all aspects of question data persistence:
 * - Generated question local storage management
 * - Question database synchronization and merging
 * - Data import/export functionality
 * - Duplicate detection and removal
 * - Storage quota management
 */

/**
 * StorageManager class for handling persistent question data storage
 * 
 * @class StorageManager
 * @description Manages the storage, retrieval, and synchronization of Japanese
 * learning questions in the browser's localStorage with advanced features
 * like deduplication, quota management, and data validation
 */
class StorageManager {
    /**
     * Initialize StorageManager with configuration constants
     * 
     * @constructor
     * @description Sets up storage keys, limits, and file naming conventions
     */
    constructor() {
        this.STORAGE_KEY = 'japanese_quiz_generated_questions';
        this.EXPORT_FILENAME = 'japanese_quiz_questions.json';
        this.MAX_STORED_QUESTIONS = 1000; // Maximum number of questions to store
    }

    /**
     * Save generated questions to localStorage with deduplication and quota management
     * 
     * @param {Array<Object>} questions - Array of question objects to save
     * @returns {number} Total number of questions after saving
     * @throws {Error} If storage operation fails
     * 
     * @description Merges new questions with existing ones, removes duplicates,
     * enforces storage limits, and persists to localStorage
     * 
     * @example
     * const count = storageManager.saveGeneratedQuestions([
     *   { question: "...", options: [...], answer: "...", ... }
     * ]);
     * console.log(`Total questions stored: ${count}`);
     */
    saveGeneratedQuestions(questions) {
        try {
            const existingQuestions = this.getStoredQuestions();
            const allQuestions = [...existingQuestions, ...questions];
            
            // Enforce storage limit, keeping the most recent questions
            if (allQuestions.length > this.MAX_STORED_QUESTIONS) {
                allQuestions.splice(0, allQuestions.length - this.MAX_STORED_QUESTIONS);
            }
            
            // Remove duplicates based on question content
            const uniqueQuestions = this.removeDuplicates(allQuestions);
            
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(uniqueQuestions));
            console.log(`已儲存 ${questions.length} 題，總計 ${uniqueQuestions.length} 題`);
            
            return uniqueQuestions.length;
        } catch (error) {
            console.error('儲存題目失敗:', error);
            throw new Error('題目儲存失敗');
        }
    }

    /**
     * Retrieve all stored questions from localStorage
     * 
     * @returns {Array<Object>} Array of stored question objects
     * @description Safely retrieves and parses stored questions with error handling
     * 
     * @example
     * const questions = storageManager.getStoredQuestions();
     * console.log(`Found ${questions.length} stored questions`);
     */
    getStoredQuestions() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('讀取儲存題目失敗:', error);
            return [];
        }
    }

    /**
     * Clear all stored questions from localStorage
     * 
     * @description Removes all stored questions and logs the operation
     * 
     * @example
     * storageManager.clearStoredQuestions();
     */
    clearStoredQuestions() {
        localStorage.removeItem(this.STORAGE_KEY);
        console.log('已清除所有儲存的題目');
    }

    /**
     * Get comprehensive storage statistics
     * 
     * @returns {Object} Statistics object with counts by level, type, and topic
     * @property {number} total - Total number of stored questions
     * @property {Object} byLevel - Question count grouped by JLPT level
     * @property {Object} byType - Question count grouped by question type
     * @property {Object} byTopic - Question count grouped by topic
     * @property {number} storageUsage - Estimated storage usage in bytes
     * 
     * @description Provides detailed analytics about stored question data
     * 
     * @example
     * const stats = storageManager.getStorageStats();
     * console.log(`Total: ${stats.total}, N5: ${stats.byLevel.N5}`);
     */
    getStorageStats() {
        const questions = this.getStoredQuestions();
        const stats = {
            total: questions.length,
            byLevel: {},
            byType: {},
            bySource: {},
            storageSize: this.getStorageSize()
        };

        questions.forEach(q => {
            // 按等級統計
            stats.byLevel[q.level] = (stats.byLevel[q.level] || 0) + 1;
            
            // 按類型統計
            stats.byType[q.type] = (stats.byType[q.type] || 0) + 1;
            
            // 按來源統計
            const source = q.source || 'static';
            stats.bySource[source] = (stats.bySource[source] || 0) + 1;
        });

        return stats;
    }

    /**
     * 匯出題目到檔案
     * @param {string} format - 匯出格式 ('json', 'csv')
     */
    exportQuestions(format = 'json') {
        const questions = this.getStoredQuestions();
        
        if (questions.length === 0) {
            throw new Error('沒有題目可以匯出');
        }

        let content, filename, mimeType;

        switch (format.toLowerCase()) {
            case 'json':
                content = JSON.stringify({
                    exportDate: new Date().toISOString(),
                    questionCount: questions.length,
                    questions: questions
                }, null, 2);
                filename = `japanese_quiz_questions_${this.getDateString()}.json`;
                mimeType = 'application/json';
                break;

            case 'csv':
                content = this.convertToCSV(questions);
                filename = `japanese_quiz_questions_${this.getDateString()}.csv`;
                mimeType = 'text/csv';
                break;

            default:
                throw new Error('不支援的匯出格式');
        }

        this.downloadFile(content, filename, mimeType);
        console.log(`已匯出 ${questions.length} 題為 ${format.toUpperCase()} 格式`);
    }

    /**
     * 匯入題目從檔案
     * @param {File} file - 檔案物件
     * @returns {Promise<number>} 匯入的題目數量
     */
    async importQuestions(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                try {
                    const content = event.target.result;
                    let questions = [];

                    if (file.name.endsWith('.json')) {
                        const data = JSON.parse(content);
                        questions = data.questions || data;
                    } else if (file.name.endsWith('.csv')) {
                        questions = this.parseCSV(content);
                    } else {
                        throw new Error('不支援的檔案格式');
                    }

                    // 驗證題目格式
                    const validQuestions = questions.filter(q => this.validateQuestion(q));
                    
                    if (validQuestions.length === 0) {
                        throw new Error('檔案中沒有有效的題目');
                    }

                    // 標記為匯入的題目
                    validQuestions.forEach(q => {
                        q.source = 'imported';
                        q.importedAt = new Date().toISOString();
                        if (!q.id) {
                            q.id = Date.now() + Math.random();
                        }
                    });

                    const totalStored = this.saveGeneratedQuestions(validQuestions);
                    resolve(validQuestions.length);
                    
                } catch (error) {
                    reject(new Error(`匯入失敗: ${error.message}`));
                }
            };

            reader.onerror = () => reject(new Error('檔案讀取失敗'));
            reader.readAsText(file);
        });
    }

    /**
     * 移除重複題目
     * @param {Array} questions - 題目陣列
     * @returns {Array} 去重後的題目陣列
     */
    removeDuplicates(questions) {
        const seen = new Set();
        return questions.filter(q => {
            const key = `${q.question}_${q.answer}`;
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
    }

    /**
     * 驗證題目格式
     * @param {Object} question - 題目物件
     * @returns {boolean} 是否有效
     */
    validateQuestion(question) {
        const required = ['question', 'options', 'answer', 'explanation'];
        const hasRequired = required.every(field => question[field]);
        const hasValidOptions = Array.isArray(question.options) && question.options.length === 4;
        const hasValidAnswer = question.options && question.options.includes(question.answer);
        
        return hasRequired && hasValidOptions && hasValidAnswer;
    }

    /**
     * 轉換為 CSV 格式
     * @param {Array} questions - 題目陣列
     * @returns {string} CSV 內容
     */
    convertToCSV(questions) {
        const headers = ['ID', '等級', '類型', '題目', '選項1', '選項2', '選項3', '選項4', '正確答案', '解析', '主題', '來源', '創建時間'];
        const rows = [headers.join(',')];

        questions.forEach(q => {
            const row = [
                q.id || '',
                q.level || '',
                q.type || '',
                `"${(q.question || '').replace(/"/g, '""')}"`,
                `"${(q.options[0] || '').replace(/"/g, '""')}"`,
                `"${(q.options[1] || '').replace(/"/g, '""')}"`,
                `"${(q.options[2] || '').replace(/"/g, '""')}"`,
                `"${(q.options[3] || '').replace(/"/g, '""')}"`,
                `"${(q.answer || '').replace(/"/g, '""')}"`,
                `"${(q.explanation || '').replace(/"/g, '""')}"`,
                `"${(q.topic || '').replace(/"/g, '""')}"`,
                q.source || 'static',
                q.createdAt || q.importedAt || ''
            ];
            rows.push(row.join(','));
        });

        return rows.join('\n');
    }

    /**
     * 解析 CSV 內容
     * @param {string} csv - CSV 內容
     * @returns {Array} 題目陣列
     */
    parseCSV(csv) {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const questions = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const values = this.parseCSVLine(line);
            if (values.length >= 10) {
                questions.push({
                    id: values[0] || Date.now() + i,
                    level: values[1],
                    type: values[2],
                    question: values[3],
                    options: [values[4], values[5], values[6], values[7]],
                    answer: values[8],
                    explanation: values[9],
                    topic: values[10] || '一般',
                    source: 'imported'
                });
            }
        }

        return questions;
    }

    /**
     * 解析 CSV 行（處理引號）
     * @param {string} line - CSV 行
     * @returns {Array} 欄位陣列
     */
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const nextChar = line[i + 1];

            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    current += '"';
                    i++; // 跳過下一個引號
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }

        result.push(current);
        return result;
    }

    /**
     * 下載檔案
     * @param {string} content - 檔案內容
     * @param {string} filename - 檔案名稱
     * @param {string} mimeType - MIME 類型
     */
    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    /**
     * 取得目前日期字串
     * @returns {string} 格式化的日期字串
     */
    getDateString() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    }

    /**
     * 取得儲存大小（KB）
     * @returns {number} 儲存大小
     */
    getStorageSize() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? Math.round(new Blob([data]).size / 1024) : 0;
        } catch (error) {
            return 0;
        }
    }
}

// 全域實例
const storageManager = new StorageManager();

// 匯出到全域範圍
if (typeof window !== 'undefined') {
    window.StorageManager = StorageManager;
    window.storageManager = storageManager;
}

// Node.js 環境匯出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StorageManager, storageManager };
}
