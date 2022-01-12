import { Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function TrustSection() {
  return (
    <Container sx={{ my: "150px" }}>
      <Grid
        container
        justifyContent="space-between"
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12} sm={5} md={4}>
          <img
            src="https://via.placeholder.com/150"
            alt="d"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Stack rowGap={4} alignItems="flex-start">
            <Typography variant="h3" fontWeight="bold">
              We Have The Power Today To Change Tomorrow!
            </Typography>
            <Typography variant="body1" fontWeight="text.secondary">
              Lorem ipsum dolor sit amet consectetur notted adipisicing elit sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
              andhn cras tincidunt lobortis feugiat vivam at augue eget
            </Typography>
            <Button variant="contained" color="primary">
              Discover More
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
