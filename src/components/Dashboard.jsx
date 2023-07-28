import React, { useState } from "react";
import "../style/main.scss";
import { getGPT3Response } from "../components/ChatDashboard";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (!newMessage) return;

    const timestamp = new Date().toISOString();
    const userMessage = { text: newMessage, timestamp };
    setMessages([...messages, userMessage]);

    // Get response from GPT-3
    const botResponse = await getGPT3Response(newMessage);
    const botMessage = {
      text: botResponse,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, botMessage]);

    setNewMessage("");
  };

  return (
    <div className="chat-app-container">
      <div className="message-history">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
            <span className="timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
