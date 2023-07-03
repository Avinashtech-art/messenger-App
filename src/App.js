import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatUI from "./Components/chat";
import Login from "./Components/login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./utils/hooks";
import Themes from "./themes";
import { ThemeProvider, css } from "styled-components";
import styled from "styled-components";
import ChatHeader from "./Components/ChatHeader";
import { darkTheme, lightTheme } from "./themes";

import ChatSidebar from "./Components/ChatSidebar";

import { Layout, Space } from "antd";
import Test from "./Test";
const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#108ee9",
  height: "90vh",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

// const Container = styled.div`
//   width: 100%;
//   // border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
//   background-color: ${(props) => props.theme.bg};
//   font-family: ${(props) => props.theme.fonts[0]};
//   height: 600px;
// `;

export const ThemeVariable = css`
  margin: 1px;
  background-color: ${(props) => `${props.theme.bg} !important`};
  color: ${(props) => props.theme.fontColor};
`;

const CustomHeader = styled(Header)`
  ${ThemeVariable}
`;

const CustomContent = styled(Content)`
  ${ThemeVariable}
  
`;
const CustomSider = styled(Sider)`
  ${ThemeVariable}
`;

function App() {
  useAuth();
  const isAuthorized = useSelector((state) => state.users.isUserAuthorized);

  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((State) => !State);
  };

  // return (
  //   <ThemeProvider
  //     theme={
  //       isDarkTheme
  //         ? { isDark: true, ...darkTheme }
  //         : { isDark: false, ...lightTheme }
  //     }
  //   >
  //     <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
  //     <Test />
  //   </ThemeProvider>
  // );
  if (isAuthorized) {
    // User is already authorized or user data is present in local storage, show the home page
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ThemeProvider
                theme={
                  isDarkTheme
                    ? { isDark: true, ...darkTheme }
                    : { isDark: false, ...lightTheme }
                }
              >
                <Layout>
                <CustomSider>
                    <ChatSidebar />
                </CustomSider>

               <Layout>

  
               <CustomHeader>
                      <ChatHeader
                        toggleTheme={toggleTheme}
                        isDarkTheme={isDarkTheme}
                      />
              </CustomHeader>

              <Themes>
                      <CustomContent>
                        <ProtectedRoute>
                          <ChatUI    />
                        </ProtectedRoute>
                      </CustomContent>
              </Themes>
              </Layout>
                
              </Layout>
              </ThemeProvider>
            }
          />
          {/* {/ Redirect to home page if any other route is accessed /} */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    // User is not authorized and no user data in local storage, show the login page
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* {/ Redirect to login page if any other route is accessed /} */}
          <Route path="*" element={<Navigate to="/login" />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <ChatUI/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
