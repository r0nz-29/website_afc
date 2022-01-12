import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#3d9c4d",
      },
      background: {
        alternate: "rgb(244, 243, 239)",
        footer: "#2d3631",
      },
      divider: "rgba(255, 255, 255, 0.1)",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            textTransform: "none",
            borderRadius: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "8px",
            paddingBottom: "8px",
            fontsize: "16px",
          },
          contained: {
            padding: "16px",
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: "16px",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          positionSticky: {
            paddingTop: "16px",
            paddingBottom: "16px",
          },
        },
      },
    },
  })
);
