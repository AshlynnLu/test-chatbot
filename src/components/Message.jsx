import React from 'react';
import '../styles/Message.css';

const Message = ({ message }) => {
  const isUser = message.role === 'user';
  const timestamp = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="message-content">
        <div className="message-bubble">
          <p>{message.content}</p>
        </div>
        <div className="message-time">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default Message;
