import React from "react";
import "../switch.css";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authenticate } from "../features/chat/userSlice";
import { ChatHead, LogoutBtn } from "./chatStyled";
import { Button } from "antd";
function ChatHeader({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  const ToggleBox =styled.div`
  margin-inline-start: auto;
  pad`
   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authenticate());
    localStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <ChatHead>
    
    
      <div className="chatHead">
        <h1>ChatApp</h1>
        </div>
        
         
        <ToggleBox>
        <div className="togglebox">
          <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
          </label>
        </div>

        
        </ToggleBox>
        <div className="LogOutBtn" >
        <Button  onClick={handleLogout}>Logout</Button>
        </div>
      
   
    </ChatHead>
    
  );
}

export default ChatHeader;
