import React from 'react'
import  { useState } from "react";
function ChatSidebar() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const handleSelectMessage = (messageId) => {
    setSelectedMessage(messageId);
  }
  
  // your code for rendering the message list and message fields goes here
  const messages = [    { id: 1, text: 'Message 1' },    { id: 2, text: 'Message 2' },    { id: 3, text: 'Message 3' },  ];
  
  return (
    <div>
      {messages.map(message => (
        <div key={message.id} onClick={() => handleSelectMessage(message.id)} style={{ background: selectedMessage === message.id ? 'blue' : 'white' }}>
          {message.text}
        </div>
      ))}
    </div>
  );
}


export default ChatSidebar

