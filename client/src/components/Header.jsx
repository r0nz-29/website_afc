import { AppBar, Button, Container, Grid, Stack, Toolbar } from "@mui/material";
import Headroom from "react-headroom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <Headroom>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container disableGutters>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <img src={logo} alt="company" width="120px" />
              </Grid>
              <Grid item xs={4}>
                <Stack direction="row" justifyContent="space-between">
                  {["About", "Events", "Join us", "Art Gallery"].map(
                    (nav, i) => (
                      <Button
                        key={i}
                        variant="text"
                        sx={{
                          color: "black",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                      >
                        {nav}
                      </Button>
                    )
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Headroom>
  );
}
