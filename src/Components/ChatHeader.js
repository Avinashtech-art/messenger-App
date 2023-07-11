import React from "react";
import "../switch.css";
import "./chat.css";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Typography } from "antd";

import { authenticate } from "../features/chat/userSlice";
import { ChatHead, StyledButton } from "./chatStyled";
import { Button, Modal } from "antd";

function ChatHeader({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  const ToggleBox = styled.div`
  margin-inline-start: auto;
  pad`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authenticate());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <ChatHead>
      {/* <marquee direction="right"> */}
      <div className="chatHead">
        <h1>ChatApp</h1>
      </div>
      {/* </marquee>  */}

      <ToggleBox>
        <div className="togglebox">
          <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
          </label>
        </div>
      </ToggleBox>

      <div className="LogOutBtn">
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </div>

      {/* Theme modal button */}

      <div className="theme">
        <Button type="primary" onClick={showModal}>
          Themes
        </Button>
        <Modal
          title="Theme"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              label="Primary"
              name="Primary"
              rules={[
                {
                  required: true,
                  message: "Please input your theme!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Secondary"
              name="Secondary"
              rules={[
                {
                  required: true,
                  message: "Please input your theme!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Fontcolor"
              name="Fontcolor"
              rules={[
                {
                  required: true,
                  message: "Please input your Fontcolor!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </ChatHead>
  );
}

export default ChatHeader;
