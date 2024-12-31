import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Deep blue
    },
    secondary: {
      main: "#d81b60", // Pink
    },
    background: {
      default: "#f5f5f5",
    //   default: "#311b92",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Light pink
    },
    background: {
    //   default: "#121212",
    default: "#001f3f",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#c8d9f7",
    },
  },
}));
