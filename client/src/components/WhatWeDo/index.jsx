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
            Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse <br />{" "}
            suscipit sagitis leo sit.
          </Typography>
          <Grid container spacing={4} mt={(theme) => theme.spacing(1)}>
            {["title1", "title2", "title3", "title4"].map((item, i) => (
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
                      {item}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Lorem ipsum is free text used by neque porro est qui
                      dolorem ipsum quia.
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
