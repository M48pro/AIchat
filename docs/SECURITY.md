# Security Guidelines for AI Assistant Integration

## API Key Security

### ❌ Never Do This (Client-Side)
```javascript
// DON'T: Expose API keys in client-side code
const openai = new OpenAI({
  apiKey: 'sk-your-secret-key-here' // This will be visible to users!
});
```

### ✅ Secure Approaches

#### 1. Server-Side Proxy
Create a backend endpoint that handles AI API calls:

```javascript
// Backend endpoint (Node.js/Express example)
app.post('/api/ai-chat', async (req, res) => {
  const { message, context } = req.body;
  
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...context,
        { role: 'user', content: message }
      ]
    });
    
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'AI service unavailable' });
  }
});
```

#### 2. Supabase Edge Functions
```typescript
// supabase/functions/ai-chat/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { message } = await req.json()
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }]
    }),
  })

  const data = await response.json()
  return new Response(JSON.stringify(data))
})
```

#### 3. Serverless Functions (Vercel/Netlify)
```javascript
// api/ai-chat.js (Vercel) or netlify/functions/ai-chat.js (Netlify)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }]
    }),
  });

  const data = await response.json();
  res.json(data);
}
```

## Environment Variables

### Server-Side (.env)
```bash
# These stay on the server
OPENAI_API_KEY=sk-your-secret-key-here
DATABASE_URL=postgresql://...
JWT_SECRET=your-jwt-secret
```

### Client-Side (Vite)
```bash
# Only non-sensitive config that can be public
VITE_API_ENDPOINT=https://your-domain.com/api
VITE_APP_NAME=AI Assistant
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key  # This is safe to expose
```

## Input Validation & Sanitization

### Client-Side Validation
```typescript
const validateMessage = (message: string): boolean => {
  // Length limits
  if (message.length > 4000) return false;
  
  // Basic content filtering
  const forbiddenPatterns = [
    /script/i,
    /javascript/i,
    /eval\(/i,
    /function\(/i
  ];
  
  return !forbiddenPatterns.some(pattern => pattern.test(message));
};
```

### Server-Side Sanitization
```javascript
const sanitizeInput = (input) => {
  // Remove HTML tags
  const cleaned = input.replace(/<[^>]*>/g, '');
  
  // Limit length
  return cleaned.substring(0, 4000);
};
```

## Rate Limiting

### Client-Side Rate Limiting
```typescript
class RateLimiter {
  private requests: number[] = [];
  private maxRequests: number = 10;
  private timeWindow: number = 60000; // 1 minute

  canMakeRequest(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      return false;
    }
    
    this.requests.push(now);
    return true;
  }
}
```

### Server-Side Rate Limiting (Express)
```javascript
const rateLimit = require('express-rate-limit');

const aiChatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  message: 'Too many AI requests, please try again later.'
});

app.use('/api/ai-chat', aiChatLimiter);
```

## Content Security Policy (CSP)

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://unpkg.com;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' https://your-api-domain.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
">
```

## HTTPS & Secure Headers

### Express.js Security Headers
```javascript
const helmet = require('helmet');
app.use(helmet());

// Additional security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
```

## Data Privacy

### Message Encryption (Optional)
```typescript
// Simple client-side encryption before sending sensitive data
const encryptMessage = async (message: string, key: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(key),
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  );
  
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    data
  );
  
  return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
};
```

### Data Retention Policy
```javascript
// Automatically delete old conversations
const cleanupOldMessages = async () => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  
  await db.messages.deleteMany({
    createdAt: { $lt: thirtyDaysAgo }
  });
};
```

## Authentication & Authorization

### JWT Token Validation
```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.use('/api/ai-chat', authenticateToken);
```

## Error Handling

### Secure Error Messages
```javascript
// Don't expose internal errors to clients
const handleError = (error, res) => {
  console.error('Internal error:', error); // Log for debugging
  
  // Send generic error to client
  res.status(500).json({
    error: 'Service temporarily unavailable. Please try again later.'
  });
};
```

## Monitoring & Logging

### Security Event Logging
```javascript
const logSecurityEvent = (event, details) => {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    event,
    details,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  }));
};

// Log suspicious activity
if (suspiciousActivity) {
  logSecurityEvent('SUSPICIOUS_REQUEST', { 
    reason: 'Rate limit exceeded',
    userId: req.user?.id 
  });
}
```

## Checklist

- [ ] API keys stored server-side only
- [ ] Input validation on both client and server
- [ ] Rate limiting implemented
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Error messages don't expose internals
- [ ] Authentication/authorization in place
- [ ] Logging and monitoring configured
- [ ] Data retention policy defined
- [ ] Regular security audits scheduled