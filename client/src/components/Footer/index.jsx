import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo from "../../images/logo-white.png";
import { contact_details, footerLinks, icons } from "../../data";
import { Fragment } from "react";

export default function Footer() {
  const lessThan410 = useMediaQuery(`(max-width: 480px)`);
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.footer,
        pt: (theme) => theme.spacing(10),
      }}
    >
      <Container sx={{ pb: (theme) => theme.spacing(10) }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <img src={logo} alt="logo" width="200px" />
            <List sx={{ mt: (theme) => theme.spacing(4) }}>
              {contact_details.map((item, i) => (
                <Fragment key={i}>
                  <ListItem disableGutters>
                    <Grid container spacing={2}>
                      <Grid item>{item.icon}</Grid>
                      <Grid item>
                        <Stack>
                          <Typography color="white" variant="body1">
                            {item.primary}
                          </Typography>
                          <Typography variant="body2" color="white">
                            {item.secondary}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {i !== 2 && (
                    <Divider sx={{ my: (theme) => theme.spacing(2) }} />
                  )}
                </Fragment>
              ))}
            </List>
          </Grid>
          <Grid item mt={lessThan410 ? (theme) => theme.spacing(2) : 0}>
            <List>
              <ListItem sx={{ mb: (theme) => theme.spacing(2) }}>
                <Typography variant="h6" fontWeight="bold" color="white">
                  Links
                </Typography>
              </ListItem>
              {footerLinks.map((link, i) => (
                <ListItem key={i} sx={{ mb: (theme) => theme.spacing(2) }}>
                  <Typography variant="body2" color="#ccc">
                    {link}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          py: (theme) => theme.spacing(4),
        }}
      >
        <Container>
          <Stack
            direction={lessThan410 ? "column" : "row"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" color="#a9a9a9">
              © 2021 by artforcharity.com
            </Typography>
            <Stack direction="row" alignItems="center">
              {icons.map((item, i) => (
                <IconButton key={i}>{item}</IconButton>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
