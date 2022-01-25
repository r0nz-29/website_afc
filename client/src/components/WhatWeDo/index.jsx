import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

export default function WhatWeDo() {
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
            What We Do
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Typography
              color="text.primary"
              fontFamily="asly_brush"
              component="span"
            >
              Art for Charity
            </Typography>{" "}
            is a non-profit organization started by students of SGSITS Indore{" "}
            <br /> in collaboration with NSBM-Dishanjali.
          </Typography>
          <Grid container spacing={4} mt={(theme) => theme.spacing(1)}>
            {[
              [
                "Connecting Artists",
                "We connect artists from various parts of the country and form a community.",
              ],
              [
                "Providing a platform to artists",
                "Further, we provide them with a platform to showcase their talent via workshops and auctions.",
              ],
              [
                "Developing Skills of the children",
                "We nourish their artistic skills by organizing such workshops. We also conduct various plantation, milk donation, and cloth donation drives as per the need.",
              ],
              [
                "Welfare of the society",
                "The money generated is used for the conduction of various plantations, milk donation, and cloth donation drives to uplift the underprivileged children of our society and the betterment of the environment.",
              ],
            ].map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Paper
                  sx={{
                    py: (theme) => theme.spacing(10),
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.main,
                      transition: "0.5s ease-in-out",
                      color: "white",
                    },
                  }}
                >
                  <Stack rowGap={5}>
                    <Typography variant="h5" fontWeight="bold">
                      {item[0]}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item[1]}
                    </Typography>
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
