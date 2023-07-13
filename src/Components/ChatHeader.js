import React from "react";
import "../switch.css";
import "./chat.css";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { updateValue } from "../features/chat/themeSlice";
import { authenticate } from "../features/chat/userSlice";
import { ChatHead, StyledButton } from "./chatStyled";
import {  Modal, Tabs } from "antd";
import { ThemeMain, ThemeNameEnum } from "../themes";

function ChatHeader({ ToggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    ToggleTheme();
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

  const tempThemeValues = useSelector((state) => state.theme.tempThemeValues);
  console.log("theme values", tempThemeValues);
  const handleFormSubmit = () => {
    dispatch(updateValue(tempThemeValues));
  };
  const updateTheme = (type, name, value) => {
    dispatch(
      updateValue({
        type,
        values: { [name]: value },
      })
    );
  };

  const formItem = ({ label, name, type }) => {
    return (
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required: true,
            message: "Please input your theme!",
          },
        ]}
      >
        <Input
          value={tempThemeValues[name]}
          onChange={(e) => updateTheme(type, name, e.target.value)}
        />
      </Form.Item>
    );
  };

  const getConfig = () => {
    return {
      light: [
        { label: "Primary", name: ThemeNameEnum.Primary },
        { label: "Secondary", name: ThemeNameEnum.Secondary },
        { label: "Fontcolor", name: ThemeNameEnum.FontColor },
      ],
      dark: [
        { label: "Dark Primary", name: ThemeNameEnum.Primary },
        { label: "Secondary", name: ThemeNameEnum.Secondary },
        { label: "Fontcolor", name: ThemeNameEnum.FontColor },
      ],
    };
  };

  const formWrapper = (type) => {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={handleFormSubmit}
      >
        {getConfig()[type].map((item) => {
          return formItem({ ...item, type });
        })}
      </Form>
    );
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

      <div className="LogOutBtn">
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </div>

      {/* Theme modal button */}

      <div className="theme">
        <StyledButton onClick={showModal}>Themes</StyledButton>
        <Modal
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>
            <b>Theme</b>{" "}
          </p>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Light Theme" key="1">
              <h2>Light theme</h2>

              {formWrapper(ThemeMain.Light)}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Dark Theme" key="2">
              <h2>Dark theme</h2>
              {formWrapper(ThemeMain.Dark)}
            </Tabs.TabPane>
            <p>
              <b>DarkTheme</b>{" "}
            </p>
          </Tabs>
        </Modal>
      </div>
    </ChatHead>
  );
}

export default ChatHeader;
