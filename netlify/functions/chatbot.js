const { OpenAI } = require('openai');

exports.handler = async (event, context) => {
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
    const client = new OpenAI({
      apiKey: process.env.TWOBRAIN_API_KEY || '2B-JBU5u4VLXhB6yZeP7RBNUE6H1GpeDaf4yhW4XNGzMNRhFw1YUb',
      baseURL: process.env.TWOBRAIN_BASE_URL || 'https://portal.2brain.ai/api/bot/chat/v1',
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

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to get response from chatbot',
        success: false,
      }),
    };
  }
};
