import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Testimonials() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.alternate,
        mt: "150px",
        py: (theme) => theme.spacing(15),
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Stack rowGap={4}>
          <Typography variant="h3" fontWeight="bold" color="text.primary">
            What They Say
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse <br />{" "}
            suscipit sagitis leo sit.
          </Typography>
          <Grid container spacing={4} mt={(theme) => theme.spacing(1)}>
            {["title1", "title2", "title3"].map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Paper sx={{ textAlign: "left" }}>
                  <Stack rowGap={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight="35px"
                    >
                      I was very impresed by the kologi service lorem ipsum is
                      simply free text used by copytyping refreshing. Neque
                      porro est qui dolorem ipsum quia. I was very impresed by
                      the kologi service lorem ipsum is simply free text used by
                      copytyping refreshing. Neque porro est qui dolorem ipsum
                      quia.
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Avatar sx={{ width: "50px", height: "50px" }} />
                      </Grid>
                      <Grid item>
                        <Stack>
                          <Typography color="primary" variant="h6">
                            Name
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            designation
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
