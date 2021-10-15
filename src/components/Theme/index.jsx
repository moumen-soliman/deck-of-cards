import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    black: "#333",
    red: "red",
 },
  fontSizes: {
    small: "0.758rem",
    medium: "1rem",
    large: "1.35rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
