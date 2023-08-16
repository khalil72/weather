<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
/>;

import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#3b5998",
      // dark: "#3b5998",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DAA520",
    },

    error: {
      main: "#BD0043",
      contrastText: "#fff",
    },
    divider: "#727272",
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif",
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
  },
});
