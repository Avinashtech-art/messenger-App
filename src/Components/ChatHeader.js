import React from "react";
import "../switch.css";
import "./chat.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { updateValue } from "../features/chat/themeSlice";
import { authenticate } from "../features/chat/userSlice";
import { ChatHead, StyledButton } from "./chatStyled";
import { Modal, Tabs, Alert, Button, Space } from "antd";
import { ThemeMain, ThemeNameEnum } from "../themes";

function ChatHeader({ ToggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

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
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [updateThemeLocally, setThemeLocally] = useState({});

  const { type, name, value } = updateThemeLocally;

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);

      if (value) {
        setOpen(false);
      }

      dispatch(
        updateValue({
          type,
          values: { [name]: value },
        })
      );
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const tempThemeValues = useSelector((state) => state.theme.tempThemeValues);

  const handleFormSubmit = () => {
    dispatch(updateValue(tempThemeValues));
  };

  const handleButtonClick = () => {
    setThemeLocally({});
    console.log("tempThemeValues", form);

    form.resetFields();
  };

  const updateTheme = (type, name, value) => {
    setThemeLocally({
      type,
      name,
      value,
    });
  };
  console.log("autopop", tempThemeValues.dark.primary);

  const formItem = ({ label, name, type }) => {
    const themeType = activeTab === "1" ? ThemeMain.Light : ThemeMain.Dark;
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
          value={tempThemeValues[themeType][name]}
          defaultValue={tempThemeValues[themeType][name]}
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
        { label: "Layouts", name: ThemeNameEnum.Layouts },
      ],
      dark: [
        { label: "Dark Primary", name: ThemeNameEnum.Primary },
        { label: "Secondary", name: ThemeNameEnum.Secondary },
        { label: "Fontcolor", name: ThemeNameEnum.FontColor },
        { label: "Layouts", name: ThemeNameEnum.Layouts },
      ],
    };
  };

  const formWrapper = (type) => {
    return (
      <Form
        form={form}
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

        <StyledButton onClick={handleButtonClick}>clear</StyledButton>
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
          <Tabs
            defaultActiveKey="1"
            activeKey={activeTab}
            onChange={handleTabChange}
          >
            <Tabs.TabPane tab="Light Theme" key="1">
              <h2>Light theme</h2>

              {formWrapper(ThemeMain.Light)}
            </Tabs.TabPane>
            <Tabs.TabPane tab="Dark Theme" key="2">
              <h2>Dark theme</h2>
              {formWrapper(ThemeMain.Dark)}
            </Tabs.TabPane>
            <p></p>
          </Tabs>
        </Modal>
      </div>
    </ChatHead>
  );
}

export default ChatHeader;
