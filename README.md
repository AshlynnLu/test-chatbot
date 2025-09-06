# 2Brain Chatbot

A modern, responsive chatbot web application that integrates with the 2Brain API. Built with React and deployed on Netlify.

## Features

- 🤖 AI-powered conversations using 2Brain API
- 💬 Modern chat interface with message bubbles
- 📱 Fully responsive design for mobile and desktop
- 💾 Message history persistence with localStorage
- ⚡ Real-time loading states and error handling
- 🎨 Beautiful gradient design with smooth animations

## Tech Stack

- **Frontend**: React 19 with Vite
- **Backend**: Netlify Functions (serverless)
- **API**: 2Brain Chat API
- **Styling**: CSS with modern features
- **Deployment**: Netlify

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ChatInterface.jsx
│   │   ├── Message.jsx
│   │   ├── MessageInput.jsx
│   │   └── LoadingSpinner.jsx
│   ├── hooks/              # Custom React hooks
│   │   └── useChat.js
│   ├── utils/              # Utility functions
│   │   └── storage.js
│   ├── styles/             # CSS styles
│   │   ├── App.css
│   │   ├── ChatInterface.css
│   │   ├── Message.css
│   │   ├── MessageInput.css
│   │   └── LoadingSpinner.css
│   ├── App.jsx
│   └── main.jsx
├── netlify/
│   └── functions/          # Serverless functions
│       └── chatbot.js
├── public/
├── netlify.toml            # Netlify configuration
├── package.json
└── README.md
```

## Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 2brain-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your 2Brain API credentials:
   ```
   TWOBRAIN_API_KEY=your_api_key_here
   TWOBRAIN_BASE_URL=https://portal.2brain.ai/api/bot/chat/v1
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Test with Netlify Functions locally**
   ```bash
   npm run netlify:dev
   ```

## Deployment to Netlify

### Method 1: Git-based Deployment

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Configure Environment Variables**
   - In Netlify dashboard, go to Site settings > Environment variables
   - Add `TWOBRAIN_API_KEY` with your API key
   - Add `TWOBRAIN_BASE_URL` with the API base URL

### Method 2: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## API Configuration

The chatbot uses the 2Brain API with the following configuration:

- **Base URL**: `https://portal.2brain.ai/api/bot/chat/v1`
- **Authentication**: API Key
- **Model**: Empty string (as specified in requirements)
- **Format**: OpenAI-compatible API

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TWOBRAIN_API_KEY` | Your 2Brain API key | Yes |
| `TWOBRAIN_BASE_URL` | 2Brain API base URL | Yes |

## Features in Detail

### Chat Interface
- Clean, modern design inspired by popular messaging apps
- Message bubbles with different styles for user and bot messages
- Timestamps for each message
- Smooth animations and transitions

### Message Persistence
- Messages are automatically saved to localStorage
- Conversation history persists across browser sessions
- Clear chat functionality to start fresh

### Error Handling
- Comprehensive error handling for API failures
- User-friendly error messages
- Retry functionality for failed requests

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface elements

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m "Add feature"`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.