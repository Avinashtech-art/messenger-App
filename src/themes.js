import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue:  "rgb(206, 226, 248)",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  }

}

export const lightTheme = {
  bg: '#fff',
  primary: '#ff0072',
  chattheme:"blue",
  fontColor: '#1c1c1c',
  // messageContent:"blue",

  nodeBg: '#f2f2f5',
  nodeColor: '#222',
  nodeBorder: '#222',

  minimapMaskBg: '#f2f2f5',

  controlsBg: '#fefefe',
  controlsBgHover: '#eee',
  controlsColor: '#222',
  controlsBorder: '#ddd',
};

export const darkTheme = {
  bg: '#1c1c1c',
  primary: '#ff0072',
  chattheme:"red",
  fontColor: '#fff',
  nodeBg: '#343435',
  nodeColor: '#f9f9f9',
  nodeBorder: '#888',

  minimapMaskBg: '#343435',

  controlsBg: '#555',
  controlsBgHover: '#676768',
  controlsColor: '#dddddd',
  controlsBorder: '#676768',
};




const Themes =({ children ,isDarkTheme}) => (
  <ThemeProvider theme={theme} isDarkTheme={isDarkTheme}>{children}</ThemeProvider>
);

export default Themes;



