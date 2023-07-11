



import React from "react";
// import { useState } from "react";
import './chat.css'
import { SideBar } from "./chatStyled";
function ChatSidebar() {
 

  return (
    
    <div className="sidebar" >
      {/* {messages.map((message) => (
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
   {/* <ChatHeader selectedMessage={selectedMessage} messages={messages} /> pass selectedMessage and messages as props     */}
   <h1>SideBar</h1>
  
    </div>
 
  );
}

export default ChatSidebar;

