import React from "react";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "rgb(206, 226, 248)",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const ThemeNameEnum = {
  Primary: "primary",
  Secondary: "secondary",
  FontColor: "font",
  Layouts: "layouts",
};

export const ThemeMain = {
  Dark: "dark",
  Light: "light",
};

export const LightThemeDefault = {
  [ThemeNameEnum.Primary]: "#B2DFFB",
  [ThemeNameEnum.Secondary]: "#D3F4FF",
  [ThemeNameEnum.FontColor]: "black",
  [ThemeNameEnum.Layouts]: "#D3F4FF",
};

export const DarkThemeDefault = {
  [ThemeNameEnum.Primary]: "#041C32",
  [ThemeNameEnum.Secondary]: "#19376D",
  [ThemeNameEnum.FontColor]: "#fff",
  [ThemeNameEnum.Layouts]: "#1F4068",
};

// export const lightTheme = {
//   bg: '#DDE6ED',
//   Primary:"#526D82" ,
//   Secondary:'#f0eff3',
//   fontColor: '#1c1c1c',
//   inputColor:'#9DB2BF',
//   LogOutBtn:'#aaa'

// };

// export const darkTheme = {
//   bg: '#041C32',
//   Primary:"#022C43",
//   Secondary:'#19376D',
//   fontColor: '#fff',
//   inputColor:' #27374D ',
//   LogOutBtn:'#7FDBFF'

// };

const Themes = ({ children, isDarkTheme }) => (
  <ThemeProvider theme={theme} isDarkTheme={isDarkTheme}>
    {children}
  </ThemeProvider>
);

export default Themes;
