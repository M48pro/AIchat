import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface AIRequest {
  message: string;
  context?: any[];
  language?: string;
  userId?: string;
}

interface AIResponse {
  response: string;
  confidence?: number;
  suggestions?: string[];
  error?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, context, language = 'en', userId }: AIRequest = await req.json()

    if (!message?.trim()) {
      throw new Error('Message is required')
    }

    // Initialize Supabase client for logging
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Log the request for analytics
    if (userId) {
      await supabase
        .from('ai_chat_logs')
        .insert({
          user_id: userId,
          message: message.substring(0, 1000), // Limit message length for logging
          language,
          timestamp: new Date().toISOString()
        })
        .catch(err => console.warn('Failed to log chat:', err))
    }

    // For demo purposes, we'll simulate AI responses
    // In production, replace this with actual AI service integration
    const aiResponse = await simulateAIResponse(message, language, context)

    return new Response(
      JSON.stringify(aiResponse),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('AI Chat error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'AI service temporarily unavailable',
        response: getErrorMessage(error.message || 'Unknown error')
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

async function simulateAIResponse(message: string, language: string, context?: any[]): Promise<AIResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

  const responses = {
    en: [
      "I understand your question. Let me help you with that.",
      "That's an interesting point. Here's what I think...",
      "I can assist you with that. Let me provide some information.",
      "Thank you for your message. I'm here to help.",
      "I see what you're asking about. Here's my response..."
    ],
    ru: [
      "Я понимаю ваш вопрос. Позвольте мне помочь вам с этим.",
      "Это интересный момент. Вот что я думаю...",
      "Я могу помочь вам с этим. Позвольте предоставить информацию.",
      "Спасибо за ваше сообщение. Я здесь, чтобы помочь.",
      "Я понимаю, о чем вы спрашиваете. Вот мой ответ..."
    ],
    it: [
      "Capisco la tua domanda. Lascia che ti aiuti con questo.",
      "È un punto interessante. Ecco cosa penso...",
      "Posso aiutarti con questo. Lascia che fornisca alcune informazioni.",
      "Grazie per il tuo messaggio. Sono qui per aiutare.",
      "Vedo di cosa stai chiedendo. Ecco la mia risposta..."
    ]
  }

  const languageResponses = responses[language as keyof typeof responses] || responses.en
  const randomResponse = languageResponses[Math.floor(Math.random() * languageResponses.length)]

  return {
    response: `${randomResponse}\n\nYour message: "${message}"`,
    confidence: 0.85 + Math.random() * 0.15,
    suggestions: [
      "Tell me more about this topic",
      "Can you provide examples?",
      "What are the alternatives?"
    ]
  }
}

function getErrorMessage(error: string): string {
  return "I apologize, but I encountered an error processing your request. Please try again."
}

/* 
To integrate with real AI services like OpenAI, replace simulateAIResponse with:

async function callOpenAI(message: string, language: string, context?: any[]): Promise<AIResponse> {
  const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
  if (!openaiApiKey) {
    throw new Error('OpenAI API key not configured')
  }

  const systemMessage = {
    role: 'system',
    content: `You are a helpful AI assistant. Respond in ${language === 'ru' ? 'Russian' : language === 'it' ? 'Italian' : 'English'}.`
  }

  const messages = [
    systemMessage,
    ...(context || []),
    { role: 'user', content: message }
  ]

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openaiApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages,
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`)
  }

  const data = await response.json()
  const aiResponse = data.choices[0]?.message?.content || 'No response generated'

  return {
    response: aiResponse,
    confidence: 0.9
  }
}
*/