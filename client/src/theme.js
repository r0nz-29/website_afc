import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#3d9c4d",
      },
    },
    components: {
      // MuiTypography: {
      //   styleOverrides: {
      //     root: {
      //       fontFamily: "Nunito",
      //     },
      //   },
      // },
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
