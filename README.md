# Japanese Language Learning Web Application

## 🎌 Project Overview

A comprehensive web-based Japanese Language Proficiency Test (JLPT) application that combines traditional static questions with AI-powered dynamic question generation. Features multi-level support, real-time analytics, and a progressive learning system designed for Japanese language learners of all levels.

## ✨ Key Features

### 🎯 Core Testing System
- **Multi-Level Support**: Complete JLPT levels (N5, N4, N3, N2, N1) plus Beginner mode
- **Question Categories**: 
  - 漢字 (Kanji) - Character reading and writing
  - 詞彙 (Vocabulary) - Word meaning and usage
  - 文法 (Grammar) - Sentence structure and particles
  - 讀解 (Reading Comprehension) - Text analysis and understanding
- **Flexible Quiz Options**: 10, 20, 50 questions or custom quantity up to 100
- **Real-time Performance**: Live timer and immediate feedback
- **Bilingual Interface**: Complete Traditional Chinese and English support

### 🤖 AI-Powered Question Generation
- **Google Gemini API Integration**: Dynamic question creation using advanced language models
- **Intelligent Content Generation**: 
  - Level-appropriate vocabulary and grammar
  - Topic-specific question sets
  - Multiple choice format with detailed explanations
- **Quality Assurance**: Automatic validation and format checking
- **Seamless Integration**: Generated questions merge with existing database
- **Smart Rate Limiting**: Built-in usage management and error recovery

### 📊 Advanced Analytics & Progress Tracking
- **Visual Progress Charts**: Interactive Chart.js visualizations showing improvement over time
- **Achievement System**: 25+ badges for various learning milestones
- **Detailed Performance Analytics**:
  - Category-wise score breakdown
  - Accuracy trends over time
  - Difficulty progression analysis
  - Time efficiency metrics
- **Comprehensive History**: Complete record of all quiz attempts with mistake analysis
- **Learning Insights**: Personalized recommendations based on performance patterns

### 🏗️ Modern Technical Architecture
- **Modular ES6+ JavaScript**: Clean, maintainable code structure
- **Progressive Web App (PWA)**: Mobile-optimized with offline capabilities
- **Responsive Design**: Seamless experience across all devices
- **Local Storage Management**: Client-side persistence with data validation
- **API Configuration System**: Secure key management and connection testing

## 🔧 Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup with ARIA accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript ES6+**: No external framework dependencies
- **Chart.js**: Interactive data visualization
- **Local Storage API**: Client-side data persistence

### API & External Services
- **Google Gemini API**: Advanced language model integration
- **RESTful Communication**: Clean API interaction patterns
- **Error Handling**: Comprehensive error management and user feedback
- **Security**: API key encryption and secure storage practices

### Development Architecture
```
project/
├── index.html              # Main application entry point
├── style.css              # Global styles and responsive design
├── script.js              # Main application controller
├── config/
│   └── apiConfig.js       # API configuration and management
├── data/
│   ├── questionDB.js      # Static question database
│   └── storageManager.js  # Local storage management
└── README.md              # Project documentation
```

### Data Management

- **Modular Question Database**: External JSON-structured question repository
- **Dynamic Content**: AI-generated questions seamlessly integrated
- **Progress Persistence**: LocalStorage for offline capability
- **Export/Import Ready**: Structured data format for easy migration

## 📁 Project Structure

```text
Japanese Learning Web/
├── index.html              # Main application interface
├── script.js               # Core application logic
├── style.css               # Comprehensive styling system
├── README.md               # Project documentation
├── data/
│   ├── questionDB.js       # Static question database
│   └── storageManager.js   # Local storage management
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

## � Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Optional: Google Gemini API key for dynamic question generation

### Installation

1. Download or clone the project files
2. Open `index.html` in your web browser
3. No additional setup required for basic functionality
4. Configure API key for enhanced features (optional)

### API Setup (Optional)

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key for Gemini
3. Open the application and navigate to "API 設定" (API Settings)
4. Enter your API key and test the connection
5. Start generating unlimited custom questions

## 📖 Usage Guide

### Taking a Quiz

1. Select your JLPT level (N5-N1 or Beginner)
2. Choose question quantity (10, 20, 50, or custom)
3. Click "開始測驗" (Start Quiz)
4. Answer questions and submit when complete
5. Review results and explanations

### Generating New Questions

1. Configure your API key in settings
2. Use the question generator interface
3. Specify level, type, topic, and quantity
4. Generated questions automatically save to local database
5. Use in future quizzes alongside static content

### Tracking Progress

1. Complete multiple quizzes to build history
2. View "學習紀錄" (Learning Records) for detailed analytics
3. Check badge progress and unlock achievements
4. Monitor improvement trends in the progress chart

## �📊 Question Database

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

Unlock 25+ achievements as you progress:

- **初次挑戰**: Complete your first quiz
- **完美主義者**: Achieve a perfect score of 100
- **N5入門**: Complete an N5 level quiz
- **速讀者**: Finish 10+ questions in under 1 minute
- **連續答對**: Answer 5 questions correctly in a row
- **學習達人**: Complete 50 total quizzes
- **百題挑戰**: Answer 100 questions correctly
- And many more milestone achievements...

## 🌐 Internationalization

### Supported Languages

- **Traditional Chinese**: Full interface translation
- **English**: Complete localization (extensible)
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
