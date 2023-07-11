import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatUI from "./Components/chat";
import Login from "./Components/login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./utils/hooks";
import Themes from "./themes";
import  { ThemeProvider} from "styled-components";

import ChatHeader from "./Components/ChatHeader";
import { darkTheme, lightTheme } from "./themes";
import { Layout } from "antd";
import {
  CustomContent,
  CustomHeader,
  CustomSider,
} from "./Components/chatStyled";
import ChatSidebar from "./Components/ChatSidebar";





function App() {
  useAuth();
  const isAuthorized = useSelector((state) => state.users.isUserAuthorized);

  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((State) => !State);
  };


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
                          <ChatUI />
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
                <ChatUI />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
