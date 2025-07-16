# 日本語能力測驗系統 (Japanese Proficiency Test System)

## Project Overview

This is an advanced web-based Japanese Language Proficiency Test (JLPT) application that combines traditional static questions with AI-powered dynamic question generation. The application supports multiple JLPT levels (N5 to N1) and provides comprehensive learning analytics and progress tracking.

## 🌟 Key Features

### Core Testing System
- **Multi-Level Support**: JLPT levels N5, N4, N3, N2, N1, plus Beginner mode
- **Question Categories**: 漢字 (Kanji), 詞彙 (Vocabulary), 文法 (Grammar), 讀解 (Reading Comprehension)
- **Flexible Quiz Options**: 10, 20, 50 questions or custom quantity
- **Real-time Timer**: Track completion time for each quiz attempt
- **Bilingual Interface**: Full support for Traditional Chinese and English

### AI-Powered Question Generation
- **Gemini API Integration**: Generate dynamic questions using Google's Gemini AI
- **Customizable Generation**: Specify level, type, topic, and quantity
- **Quality Validation**: Automatic format checking and content validation
- **Seamless Integration**: Generated questions merge with static question database
- **Rate Limiting**: Built-in API usage management and error handling

### Advanced Analytics
- **Progress Tracking**: Visual charts showing score improvement over time
- **Achievement System**: Unlock badges for various milestones
- **Detailed Analytics**: Category-wise performance breakdown
- **History Management**: Comprehensive record of all quiz attempts
- **Mistake Analysis**: Review incorrect answers with detailed explanations

### Modern Architecture
- **Modular Design**: Separated question database and API configuration
- **Progressive Web App**: Mobile-optimized with PWA features
- **Local Storage**: Client-side data persistence
- **Responsive Design**: Adapts to all screen sizes and devices
- **Clean UI/UX**: Modern interface with warm color scheme

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: ES6+ features, modular design, no external dependencies
- **Chart.js**: Interactive progress visualization
- **PWA Ready**: Service worker compatible, mobile app-like experience

### API Integration
- **Google Gemini API**: Advanced language model for question generation
- **RESTful Architecture**: Clean API communication patterns
- **Error Handling**: Comprehensive error management and user feedback
- **Security**: API key management with local encryption considerations

### Data Management
- **Modular Question Database**: External JSON-structured question repository
- **Dynamic Content**: AI-generated questions seamlessly integrated
- **Progress Persistence**: LocalStorage for offline capability
- **Export/Import Ready**: Structured data format for easy migration

## 📁 Project Structure

```
Japanese Learning Web/
├── index.html              # Main application interface
├── script.js               # Core application logic
├── style.css               # Comprehensive styling system
├── README.md               # Project documentation
├── data/
│   └── questionDB.js       # Modular question database
└── config/
    └── apiConfig.js        # API configuration and management
```

### File Descriptions

- **index.html**: Complete application interface with multi-screen navigation
- **script.js**: Main application logic including quiz engine, analytics, and UI management
- **style.css**: Modern responsive design with warm color scheme and mobile optimization
- **data/questionDB.js**: Comprehensive question database with 37+ questions across all JLPT levels
- **config/apiConfig.js**: API configuration class with rate limiting and error handling

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for AI features)
- Optional: Google Gemini API key for question generation

### Installation
1. Download or clone the project files
2. Open `index.html` in a web browser
3. Start taking quizzes immediately with static questions
4. For AI features: Click "API 設定" and configure your Gemini API key

### API Setup (Optional)
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a free account and generate an API key
3. In the application, go to "API 設定" (Settings)
4. Enter your API key and test the connection
5. Use the question generator to create custom content

## 🎯 Usage Guide

### Taking a Quiz
1. Select your JLPT level (N5-N1 or Beginner)
2. Choose the number of questions
3. Click "開始測驗" to start
4. Complete the quiz and review your results
5. Check the mistake analysis for learning insights

### Generating New Questions
1. Configure your API key in settings
2. Select level, type, and optional topic
3. Choose quantity (1-5 questions)
4. Click "生成題目" to generate
5. Review generated questions before they're added to the database

### Tracking Progress
1. Complete multiple quizzes to build history
2. View "學習紀錄" for progress charts
3. Unlock achievements by reaching milestones
4. Analyze category-wise performance for targeted study

## 📊 Question Database

### Static Content
- **37+ Carefully Curated Questions** across all JLPT levels
- **Authentic JLPT-Style Format** with multiple-choice options
- **Detailed Explanations** for every question
- **Topic Categorization** for targeted practice
- **Difficulty Scaling** from basic to advanced concepts

### Dynamic Generation
- **AI-Powered Content**: Contextually appropriate questions
- **Quality Assurance**: Automatic validation of format and content
- **Seamless Integration**: Generated questions follow identical structure
- **Infinite Expansion**: Unlimited question creation capability

## 🏆 Achievement System

- **初次挑戰**: Complete your first quiz
- **完美主義者**: Achieve a perfect score of 100
- **N5入門**: Complete an N5 level quiz
- **速讀者**: Finish 10+ questions in under 1 minute
- **More achievements unlock as you progress**

## 🌐 Internationalization

### Supported Languages
- **Traditional Chinese**: Full interface translation
- **English**: Complete localization
- **Dynamic Switching**: Change language without losing progress
- **Persistent Preference**: Language choice saved locally

## 📱 Mobile Optimization

- **Responsive Design**: Optimized for phones and tablets
- **Touch-Friendly**: Large buttons and touch targets
- **PWA Features**: Add to home screen capability
- **Offline Ready**: Core functionality works without internet
- **Performance Optimized**: Fast loading and smooth interactions

## 🔧 Customization Options

### Question Database
- Add custom questions to `data/questionDB.js`
- Follow the established JSON schema
- Include all required fields for compatibility

### Styling
- Modify CSS variables in `style.css` for color themes
- Responsive breakpoints easily adjustable
- Component-based styling for easy customization

### API Configuration
- Extend `config/apiConfig.js` for additional AI services
- Modify generation prompts for different question styles
- Adjust rate limiting and error handling as needed

## 🔐 Security Considerations

- **API Key Storage**: Local storage with encryption recommendations
- **Rate Limiting**: Built-in protection against API abuse
- **Data Privacy**: All user data stored locally, no external transmission
- **Content Validation**: AI-generated content automatically validated

## 🤝 Contributing

We welcome contributions to improve the Japanese Learning Web application:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across different browsers
5. Submit a pull request with detailed description

### Areas for Contribution
- Additional question content
- New achievement types
- UI/UX improvements
- Additional language support
- Performance optimizations

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute according to the license terms.

## 🆘 Support

For issues, suggestions, or questions:
1. Check existing documentation
2. Review browser console for error messages
3. Verify API configuration if using AI features
4. Create detailed issue reports with reproduction steps

## 📈 Future Roadmap

- **Additional AI Models**: Support for multiple language models
- **Enhanced Analytics**: More detailed learning insights
- **Social Features**: Score sharing and competition
- **Offline Mode**: Complete offline functionality
- **Advanced Question Types**: Audio and image-based questions
- **Spaced Repetition**: Intelligent review scheduling

---

**Created with ❤️ for Japanese language learners worldwide**
