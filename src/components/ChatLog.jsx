import React from "react";

const ChatLog = ({ messages }) => {
  return (
    <div className="chat-log">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`chat-msg-${
            message.sender === "user" ? "log" : "response"
          }`}
        >
          <div className="chat-msg-center">
            <div
              className={`chat-avatar-${
                message.sender === "user" ? "user" : "response"
              }`}
            ></div>
            <div className="chat-msg">{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatLog;
