



import React from "react";
import { useState } from "react";
import ChatHeader from "./Header";
function ChatSidebar() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (messageId) => {
    setSelectedMessage(messageId);
  };

  const messages = [
    { id: 1, text: "Message 1" },
    { id: 2, text: "Message 2" },
    { id: 3, text: "Message 3" },
  ];

  return (
    <div>
      {messages.map((message) => (
        <div
          key={message.id}
          onClick={() => handleSelectMessage(message.id)}
          style={{
            background: selectedMessage === message.id ? "gray" : "white",
          }}
        >
          {message.text}
        </div>
      ))}
   {/* <ChatHeader selectedMessage={selectedMessage} messages={messages} /> {/* pass selectedMessage and messages as props */}    
    </div>
  );
}

export default ChatSidebar;

