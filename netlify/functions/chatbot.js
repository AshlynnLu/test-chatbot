import { OpenAI } from 'openai';

export const handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const { message } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Initialize OpenAI client with 2brain configuration
    const apiKey = process.env.TWOBRAIN_API_KEY || '2B-pZSUfUKTekLfmIaWUzb8kqKfTW4EK669c0FzAcmsA3GDMAyIuD';
    const baseURL = process.env.TWOBRAIN_BASE_URL || 'https://ai.2brain.cn/api/bot/chat/v1';
    
    console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');
    console.log('Base URL:', baseURL);
    
    const client = new OpenAI({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    // Call 2brain API
    const completion = await client.chat.completions.create({
      model: '',
      messages: [{ role: 'user', content: message }],
      stream: false,
    });

    const response = completion.choices[0].message.content;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response,
        success: true,
      }),
    };
  } catch (error) {
    console.error('Error calling 2brain API:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      code: error.code,
      type: error.type
    });

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to get response from chatbot',
        success: false,
        details: error.message,
        apiKeySet: !!process.env.TWOBRAIN_API_KEY,
        baseUrlSet: !!process.env.TWOBRAIN_BASE_URL
      }),
    };
  }
};
