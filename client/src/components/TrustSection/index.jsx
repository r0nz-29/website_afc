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
              Alone we can do so little, but together so much
            </Typography>
            <Typography variant="body1" fontWeight="text.secondary">
              This is a quote by Helen Keller, which forever stands the test of
              time. When multiple people, sharing the same goal, join hands
              together, the work becomes simpler and as an outcome, new horizons
              are reached. Under the hood, people learn from each other, enhance
              their creativity, personality, and social skills. We believe, if
              an individual starts contributing, even in a modest quantity, a
              huge impact can be made.
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
