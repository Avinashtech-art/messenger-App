import { createSlice } from "@reduxjs/toolkit";
import { DarkThemeDefault, LightThemeDefault, ThemeMain } from "../../themes";

const themeInit = {
  [ThemeMain.Dark]: DarkThemeDefault,
  [ThemeMain.Light]: LightThemeDefault,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: false,
    tempThemeValues: themeInit,
    orginalTheme: themeInit,
  },

  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },

    /**
     * Same as
     * myObj.light = {...myObj.light, ...{"secondary":"grey"}}
     */
    updateValue: (state, action) => {
      state.tempThemeValues[action.payload.type] = {
        ...state.tempThemeValues[action.payload.type],
        ...action.payload.values,
      };
      state.orginalTheme = {
        ...state.tempThemeValues,
      };
    },
  },
});

export const { toggleTheme, updateValue, submitTheme } = themeSlice.actions;
export const getOrginalTheme = (state) => state.theme.orginalTheme;

export default themeSlice.reducer;
