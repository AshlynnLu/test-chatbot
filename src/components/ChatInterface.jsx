import React, { useEffect, useRef } from 'react';
import { useChat } from '../hooks/useChat';
import Message from './Message';
import MessageInput from './MessageInput';
import LoadingSpinner from './LoadingSpinner';
import '../styles/ChatInterface.css';

const ChatInterface = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="header-content">
          <h1>2Brain Chatbot</h1>
          <p>Ask me anything!</p>
        </div>
        {messages.length > 0 && (
          <button onClick={clearChat} className="clear-button">
            Clear Chat
          </button>
        )}
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <div className="welcome-content">
              <h2>Welcome to 2Brain Chatbot!</h2>
              <p>Start a conversation by typing a message below.</p>
              <div className="example-prompts">
                <p>Try asking:</p>
                <ul>
                  <li>"What can you help me with?"</li>
                  <li>"Tell me about artificial intelligence"</li>
                  <li>"How does machine learning work?"</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
        
        {isLoading && <LoadingSpinner />}
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()} className="retry-button">
              Retry
            </button>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
