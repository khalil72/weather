<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:ital,wght@0,100;0,300;0,500;1,100;1,300&display=swap"
  rel="stylesheet"
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
    fontFamily: "'Roboto', sans-serif",
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
  },
});
