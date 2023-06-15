import React from "react";

function ChatHeader({ selectedMessage }) {




  return (
    <div className="chatGrid-Head">
      <div className="chatInfo">
      <h1>{selectedMessage}</h1>
      <h1>ChatApp</h1>
      </div>
    
    </div>
  );
}



export default ChatHeader;

