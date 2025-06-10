# AI Assistant & Yacht Regatta Booking System

A modern, full-stack application featuring an AI assistant interface and a specialized chatbot for yacht regatta bookings at Garda Racing Yacht Club.

## 🏗️ Architecture

The project is now properly separated into frontend and backend components:

### Frontend (Client-side)
- **React + TypeScript** - Modern UI components
- **Tailwind CSS** - Responsive styling
- **Vite** - Fast development and building
- **Supabase Client** - Database queries with RLS

### Backend (Server-side)
- **Supabase Edge Functions** - Serverless backend logic
- **AI Chat Service** - Secure AI integration endpoint
- **Chatbot Service** - Yacht booking conversation logic
- **PostgreSQL** - Database with Row Level Security

## 🚀 Features

### AI Assistant
- **Multi-language support** (English, Russian, Italian)
- **Voice input** with speech recognition
- **File attachments** support
- **Customizable themes** (light/dark)
- **Responsive design** for all devices
- **Secure API integration** via backend endpoints

### Yacht Regatta Chatbot
- **Intelligent conversation flow** for booking yacht regattas
- **Session availability checking** in real-time
- **Customer management** with contact collection
- **Booking confirmation** with reference numbers
- **Multi-language support** for international customers

### Embeddable Widget
- **Easy integration** into any website
- **Customizable appearance** and positioning
- **Lightweight bundle** with minimal dependencies
- **Cross-browser compatibility**

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+
- Supabase account
- Git

### 1. Clone the repository
```bash
git clone <repository-url>
cd ai-assistant-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
Run the migrations to set up the database schema:
```bash
# The migrations are in supabase/migrations/
# Apply them through Supabase Dashboard or CLI
```

### 5. Deploy Edge Functions
Deploy the backend functions to Supabase:
```bash
# Deploy AI chat function
supabase functions deploy ai-chat

# Deploy chatbot function  
supabase functions deploy chatbot
```

### 6. Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build widget for embedding
npm run build:widget
```

## 📁 Project Structure

```
src/
├── api/                    # API service layers
│   ├── ai-service.ts      # AI chat backend integration
│   └── chatbot-service.ts # Chatbot backend integration
├── components/            # React components
│   ├── AIAssistant.tsx   # Main AI assistant interface
│   ├── ChatWidget.tsx    # Yacht booking chatbot widget
│   ├── EmbeddableWidget.tsx # Embeddable widget wrapper
│   ├── StandaloneApp.tsx # Standalone AI assistant app
│   └── WidgetDemo.tsx    # Widget configuration demo
├── chatbot/              # Legacy chatbot logic (moved to backend)
└── widget.tsx           # Widget entry point for embedding

supabase/
├── functions/           # Edge Functions (Backend)
│   ├── ai-chat/        # AI service integration
│   └── chatbot/        # Yacht booking chatbot logic
└── migrations/         # Database schema and setup
```

## 🔒 Security Features

### Backend Security
- **API keys stored server-side** - No exposure in client code
- **Rate limiting** on all endpoints
- **Input validation** and sanitization
- **CORS protection** with proper headers

### Database Security
- **Row Level Security (RLS)** enabled on all tables
- **Proper access policies** for different user roles
- **Secure customer data handling**
- **Audit logging** for all interactions

### Client Security
- **No sensitive data in localStorage**
- **Secure session management**
- **XSS protection** with proper input handling

## 🌐 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend Deployment
Backend functions are deployed to Supabase Edge Functions:
```bash
supabase functions deploy ai-chat
supabase functions deploy chatbot
```

### Widget Distribution
Build the embeddable widget:
```bash
npm run build:widget
```

This creates distributable files in `dist/`:
- `garda-chat-widget.umd.js` - Widget JavaScript
- `style.css` - Widget styles

## 📖 Integration Guide

### Basic HTML Integration
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <script>
        window.gardaChatWidgetConfig = {
            position: 'bottom-right',
            theme: 'light',
            primaryColor: '#0066cc',
            language: 'en'
        };
    </script>
    <script src="./dist/garda-chat-widget.umd.js"></script>
</body>
</html>
```

### React Integration
```jsx
import { EmbeddableWidget } from './components/EmbeddableWidget';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <EmbeddableWidget
        position="bottom-right"
        theme="light"
        primaryColor="#0066cc"
        language="en"
      />
    </div>
  );
}
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

## 📊 Analytics & Monitoring

The system includes built-in analytics:
- **Conversation tracking** in `chatbot_logs` table
- **AI interaction logging** in `ai_chat_logs` table
- **User journey analytics** for booking flow
- **Error tracking** and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation in `/docs`
- Review integration examples
- Open an issue on GitHub

## 🔄 Migration from Monolithic to Microservices

This project has been refactored from a monolithic client-side architecture to a proper frontend/backend separation:

### What Changed
- **AI logic moved to backend** - Secure API key handling
- **Chatbot logic moved to backend** - Better state management
- **Database operations secured** - Proper RLS implementation
- **Client simplified** - Focus on UI/UX only

### Benefits
- **Enhanced security** - No API keys in client code
- **Better scalability** - Backend can handle multiple clients
- **Improved maintainability** - Clear separation of concerns
- **Production ready** - Proper error handling and logging