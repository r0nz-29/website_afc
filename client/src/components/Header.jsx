import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Headroom from "react-headroom";
import logo from "../images/afc.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const lessThan980 = useMediaQuery(`(max-width: 980px)`);
  const navigate_to = useNavigate();
  return (
    <Headroom>
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Container disableGutters>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Link to="/">
                  <Stack direction="row" columnGap={2} alignItems="center">
                    <img src={logo} alt="art for charity" width="70px" />
                    <Typography
                      variant="h4"
                      color="text.primary"
                      fontFamily="asly_brush"
                    >
                      Art for Charity
                    </Typography>
                  </Stack>
                </Link>
              </Grid>
              <Grid item xs={lessThan980 ? "auto" : 5}>
                {lessThan980 ? (
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <Stack direction="row" justifyContent="space-between">
                    {[
                      ["About", "/"],
                      ["Events", "/"],
                      ["Join us", "/join"],
                      ["Art Gallery", "/"],
                    ].map((nav, i) => (
                      <Button
                        key={i}
                        variant="text"
                        onClick={() => navigate_to(nav[1])}
                        sx={{
                          color: "black",
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: "white",
                          },
                        }}
                      >
                        {nav[0]}
                      </Button>
                    ))}
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
