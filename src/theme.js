import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const lightTheme = responsiveFontSizes(createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none', // Remove focus ring
            backgroundColor:'none',
          },
          '&:active': {
            // backgroundColor: 'yourDesiredColor',
             // Set your custom active color
             outline: 'none',
             backgroundColor:'none',
          },
        },
      },
    },},
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Deep blue
    },
    secondary: {
      main: "#d81b60", // Pink
    },
    background: {
      // default: "#f5f5f5",
      default: "#FFFDF5",
    //   default: "#311b92",
      paper: "#ffffff",
    },
    text: {
      primary: "#1A1A1A",
    },
  },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none', // Remove focus ring
            backgroundColor:'none',
          },
          '&:active': {
            // backgroundColor: 'yourDesiredColor',
             // Set your custom active color
             outline: 'none',
             backgroundColor:'none',
          },
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      // main: "#90caf9", // Light blue
      main: "#000000", 
    },
    secondary: {
      main: "#f48fb1", // Light pink
    },
    background: {
    //   default: "#121212",
    // default: "#001f3f",
    // default: "#000000",
    // default: "#190c25",
    // default: "#0F172A",
    // default: "#0B3D3D",
    default: "#011627",
      paper: "#1e1e1e",
    },
    text: {
      // primary: "#c8d9f7",
      // primary: "#f5f5f5",
      // primary: "#D3D3D3",
      primary: "#D9F2F6",
    },
  },
}));
