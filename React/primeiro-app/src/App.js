import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import tmi from 'tmi.js';

function App() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const client = new tmi.Client({
      connection: { secure: true, reconnect: true },
      channels: [ 'bagi' ] // Substitua por seu canal da Twitch
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {
      const newMessage = {username: tags['username'], message: message};
      setMessages(prevMessages => {
        // Verificar se a mensagem já foi adicionada à lista
        if (prevMessages.some(m => m.username === newMessage.username && m.message === newMessage.message)) {
          return prevMessages;
        }
        return [...prevMessages, newMessage];
      });
    });

    scrollToBottom();

    return () => {
      client.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container bg-transparent">
      <div className="chat-header text-white bg-dark">
        <h1>Twitch Chat</h1>
        </div>
  <ul className="chat-message-list">
    {messages.map((message, index) => (
      <li key={index} className="chat-message-item">
        <span className="chat-message-username">{message.username}: </span>
        <span className="chat-message-text">{message.message}</span>
      </li>
    ))}
    <div ref={messagesEndRef} />
  </ul>
</div>
  );
}

export default App;
