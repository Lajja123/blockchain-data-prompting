import React, { useState } from "react";

const MessageHistory = ({
  messages,
  handleDeleteMessage,
  handleNewChatClick,
}) => {
  const filteredMessages = messages.filter(
    (message) => message.sender !== "bot"
  );

  return (
    <div className="message-history">
      <div className="side-menu-button" onClick={handleNewChatClick}>
        <span>+</span>New Chat
      </div>
      {filteredMessages.map((message) => (
        <div key={message.id} className="message">
          {message.text}
          <span
            className="delete-icon"
            onClick={() => handleDeleteMessage(message.id)}
          >
            Delete
          </span>
        </div>
      ))}
    </div>
  );
};

export default MessageHistory;
