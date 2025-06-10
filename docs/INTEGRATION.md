# AI Assistant Integration Guide

## Quick Start

### 1. Basic HTML Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    
    <!-- React Dependencies -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- AI Assistant Styles -->
    <link rel="stylesheet" href="./ai-assistant-widget.css">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>Your content here...</p>
    
    <!-- Widget Configuration -->
    <script>
        window.aiAssistantConfig = {
            position: 'bottom-right',
            theme: 'light',
            primaryColor: '#0066cc',
            language: 'en',
            apiEndpoint: '/api/ai-chat',
            welcomeMessage: 'Hello! How can I help you today?'
        };
    </script>
    
    <!-- AI Assistant Widget -->
    <script src="./ai-assistant-widget.js"></script>
</body>
</html>
```

### 2. React Application Integration

```jsx
import React from 'react';
import { AIAssistant } from './components/AIAssistant';

function App() {
  const handleMessage = (message) => {
    console.log('User message:', message);
    // Handle the message as needed
  };

  return (
    <div className="app">
      <h1>My React App</h1>
      
      {/* Standalone Assistant */}
      <AIAssistant
        mode="standalone"
        theme="light"
        primaryColor="#0066cc"
        language="en"
        onMessage={handleMessage}
        apiEndpoint="/api/ai-chat"
        enableVoice={true}
        enableAttachments={true}
      />
    </div>
  );
}
```

### 3. Widget Integration

```jsx
import React from 'react';
import { EmbeddableWidget } from './components/EmbeddableWidget';

function App() {
  return (
    <div className="app">
      <h1>My Website</h1>
      <p>Your content...</p>
      
      {/* Embeddable Widget */}
      <EmbeddableWidget
        position="bottom-right"
        theme="light"
        primaryColor="#0066cc"
        language="en"
        triggerText="Need help? Chat with AI!"
        welcomeMessage="Hello! How can I assist you?"
        apiEndpoint="/api/ai-chat"
      />
    </div>
  );
}
```

## Configuration Options

### AIAssistant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'standalone' \| 'widget'` | `'standalone'` | Display mode |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'light'` | Color theme |
| `primaryColor` | `string` | `'#0066cc'` | Primary brand color |
| `language` | `'en' \| 'ru' \| 'it'` | `'en'` | Interface language |
| `apiEndpoint` | `string` | `'/api/chat'` | AI service endpoint |
| `onMessage` | `(message: string) => void` | - | Message callback |
| `enableVoice` | `boolean` | `true` | Enable voice input |
| `enableAttachments` | `boolean` | `true` | Enable file uploads |
| `placeholder` | `string` | - | Input placeholder text |
| `welcomeMessage` | `string` | - | Initial greeting |
| `maxHeight` | `string` | `'600px'` | Maximum height |
| `customStyles` | `React.CSSProperties` | `{}` | Custom CSS styles |

### EmbeddableWidget Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Widget position |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'light'` | Color theme |
| `primaryColor` | `string` | `'#0066cc'` | Primary brand color |
| `language` | `'en' \| 'ru' \| 'it'` | `'en'` | Interface language |
| `apiEndpoint` | `string` | `'/api/chat'` | AI service endpoint |
| `triggerText` | `string` | - | Tooltip text for trigger |
| `welcomeMessage` | `string` | - | Initial greeting |
| `customTriggerIcon` | `React.ReactNode` | - | Custom trigger icon |
| `onMessage` | `(message: string) => void` | - | Message callback |
| `zIndex` | `number` | `1000` | CSS z-index |

## Platform-Specific Integration

### WordPress

#### Method 1: Plugin Integration
```php
// wp-content/plugins/ai-assistant/ai-assistant.php
<?php
/*
Plugin Name: AI Assistant Widget
Description: Adds AI assistant widget to your WordPress site
Version: 1.0.0
*/

function ai_assistant_enqueue_scripts() {
    wp_enqueue_script('react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), '18.0.0', true);
    wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('react'), '18.0.0', true);
    
    wp_enqueue_style('ai-assistant-css', plugin_dir_url(__FILE__) . 'assets/ai-assistant-widget.css');
    wp_enqueue_script('ai-assistant-js', plugin_dir_url(__FILE__) . 'assets/ai-assistant-widget.js', array('react', 'react-dom'), '1.0.0', true);
    
    // Pass configuration to JavaScript
    wp_localize_script('ai-assistant-js', 'aiAssistantConfig', array(
        'apiEndpoint' => home_url('/wp-json/ai-assistant/v1/chat'),
        'primaryColor' => get_option('ai_assistant_color', '#0066cc'),
        'language' => get_locale() === 'ru_RU' ? 'ru' : 'en'
    ));
}
add_action('wp_enqueue_scripts', 'ai_assistant_enqueue_scripts');

function ai_assistant_footer() {
    ?>
    <script>
        if (typeof window.AiAssistantWidget !== 'undefined') {
            window.AiAssistantWidget.init(aiAssistantConfig);
        }
    </script>
    <?php
}
add_action('wp_footer', 'ai_assistant_footer');
?>
```

#### Method 2: Theme Integration
```php
// functions.php
function add_ai_assistant_widget() {
    ?>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/ai-assistant-widget.css">
    
    <script>
        window.aiAssistantConfig = {
            position: 'bottom-right',
            theme: 'light',
            primaryColor: '<?php echo get_theme_mod('primary_color', '#0066cc'); ?>',
            language: '<?php echo get_locale() === 'ru_RU' ? 'ru' : 'en'; ?>',
            apiEndpoint: '<?php echo home_url('/wp-json/ai-assistant/v1/chat'); ?>'
        };
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/ai-assistant-widget.js"></script>
    <?php
}
add_action('wp_footer', 'add_ai_assistant_widget');
```

### Shopify

```liquid
<!-- In theme.liquid, before closing </body> tag -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

{{ 'ai-assistant-widget.css' | asset_url | stylesheet_tag }}

<script>
    window.aiAssistantConfig = {
        position: 'bottom-right',
        theme: '{{ settings.ai_assistant_theme | default: "light" }}',
        primaryColor: '{{ settings.ai_assistant_color | default: "#0066cc" }}',
        language: '{{ shop.locale }}',
        apiEndpoint: 'https://your-app.herokuapp.com/api/chat',
        welcomeMessage: '{{ settings.ai_assistant_welcome | default: "Hello! How can I help you today?" }}'
    };
</script>

{{ 'ai-assistant-widget.js' | asset_url | script_tag }}
```

### Next.js

```jsx
// pages/_app.js
import { useEffect } from 'react';
import { EmbeddableWidget } from '../components/EmbeddableWidget';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <EmbeddableWidget
        position="bottom-right"
        theme="light"
        primaryColor="#0066cc"
        language="en"
        apiEndpoint="/api/ai-chat"
      />
    </>
  );
}

export default MyApp;
```

```javascript
// pages/api/ai-chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, context } = req.body;

  try {
    // Your AI service integration here
    const response = await callAIService(message, context);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'AI service unavailable' });
  }
}
```

### Vue.js

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <router-view />
    <AIAssistantWidget
      :position="'bottom-right'"
      :theme="'light'"
      :primary-color="'#0066cc'"
      :language="'en'"
      :api-endpoint="'/api/ai-chat'"
      @message="handleMessage"
    />
  </div>
</template>

<script>
import AIAssistantWidget from './components/AIAssistantWidget.vue';

export default {
  name: 'App',
  components: {
    AIAssistantWidget
  },
  methods: {
    handleMessage(message) {
      console.log('User message:', message);
    }
  }
};
</script>
```

### Angular

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div id="ai-assistant-widget"></div>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Load AI Assistant Widget
    this.loadAIAssistant();
  }

  private loadAIAssistant() {
    const config = {
      position: 'bottom-right',
      theme: 'light',
      primaryColor: '#0066cc',
      language: 'en',
      apiEndpoint: '/api/ai-chat'
    };

    (window as any).aiAssistantConfig = config;
    
    // Load widget script
    const script = document.createElement('script');
    script.src = '/assets/ai-assistant-widget.js';
    document.body.appendChild(script);
  }
}
```

## Backend Integration Examples

### Node.js/Express

```javascript
const express = require('express');
const { OpenAI } = require('openai');

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/ai-chat', async (req, res) => {
  try {
    const { message, context, language } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant. Respond in ${language === 'ru' ? 'Russian' : language === 'it' ? 'Italian' : 'English'}.`
        },
        ...(context || []),
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    res.json({
      response: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('AI Chat error:', error);
    res.status(500).json({
      error: 'AI service temporarily unavailable'
    });
  }
});

app.listen(3000);
```

### Python/FastAPI

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os

app = FastAPI()
openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str
    context: list = []
    language: str = "en"

@app.post("/api/ai-chat")
async def ai_chat(request: ChatRequest):
    try:
        system_message = {
            "role": "system",
            "content": f"You are a helpful assistant. Respond in {'Russian' if request.language == 'ru' else 'Italian' if request.language == 'it' else 'English'}."
        }
        
        messages = [system_message] + request.context + [
            {"role": "user", "content": request.message}
        ]
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=messages,
            max_tokens=500,
            temperature=0.7
        )
        
        return {
            "response": response.choices[0].message.content
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="AI service unavailable")
```

### PHP/Laravel

```php
<?php
// routes/api.php
Route::post('/ai-chat', [AIController::class, 'chat']);

// app/Http/Controllers/AIController.php
class AIController extends Controller
{
    public function chat(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:4000',
            'context' => 'array',
            'language' => 'string|in:en,ru,it'
        ]);

        try {
            $client = new \GuzzleHttp\Client();
            
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'model' => 'gpt-4',
                    'messages' => array_merge(
                        [['role' => 'system', 'content' => 'You are a helpful assistant.']],
                        $request->input('context', []),
                        [['role' => 'user', 'content' => $request->input('message')]]
                    ),
                    'max_tokens' => 500,
                    'temperature' => 0.7
                ]
            ]);

            $data = json_decode($response->getBody(), true);
            
            return response()->json([
                'response' => $data['choices'][0]['message']['content']
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'AI service unavailable'
            ], 500);
        }
    }
}
```

## Customization Examples

### Custom Styling

```css
/* Override default styles */
#ai-assistant-widget {
  --primary-color: #ff6b6b;
  --border-radius: 16px;
  --shadow: 0 10px 25px rgba(0,0,0,0.1);
}

#ai-assistant-widget .chat-message {
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

#ai-assistant-widget .user-message {
  background: linear-gradient(135deg, var(--primary-color), #ff8e8e);
}
```

### Custom Trigger Icon

```jsx
import { Bot } from 'lucide-react';

<EmbeddableWidget
  customTriggerIcon={<Bot size={24} />}
  // ... other props
/>
```

### Multi-language Support

```javascript
const getLanguageFromBrowser = () => {
  const lang = navigator.language.split('-')[0];
  return ['en', 'ru', 'it'].includes(lang) ? lang : 'en';
};

window.aiAssistantConfig = {
  language: getLanguageFromBrowser(),
  // ... other config
};
```

## Troubleshooting

### Common Issues

1. **Widget not appearing**
   - Check React dependencies are loaded
   - Verify file paths are correct
   - Check browser console for errors

2. **Styling conflicts**
   - Use CSS specificity: `#ai-assistant-widget .your-class`
   - Check for conflicting CSS frameworks

3. **API errors**
   - Verify endpoint URL is correct
   - Check CORS settings
   - Ensure proper error handling

4. **Performance issues**
   - Implement proper rate limiting
   - Use CDN for static assets
   - Optimize bundle size

### Debug Mode

```javascript
window.aiAssistantConfig = {
  debug: true, // Enable debug logging
  // ... other config
};
```

This will log detailed information to the browser console for troubleshooting.