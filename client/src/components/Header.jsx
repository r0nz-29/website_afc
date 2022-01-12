import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Headroom from "react-headroom";
import logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const lessThan980 = useMediaQuery(`(max-width: 980px)`);
  return (
    <Headroom>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container disableGutters>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <img src={logo} alt="company" width="120px" />
              </Grid>
              <Grid item xs={lessThan980 ? "auto" : 5}>
                {lessThan980 ? (
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                ) : (
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
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Headroom>
  );
}
