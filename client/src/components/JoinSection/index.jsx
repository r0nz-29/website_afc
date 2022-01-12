import { Container, Grid, Paper, Stack, Typography } from "@mui/material";

export default function JoinSection() {
  return (
    <Container sx={{ my: "150px" }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7} md={5}>
          <img
            src="https://via.placeholder.com/150"
            alt="img"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Stack rowGap={4}>
            <Typography
              variant="h3"
              color="text.primary"
              fontWeight="bold"
              mt={(theme) => theme.spacing(2)}
            >
              Join The Race To Make The World A Better Place
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit
              sagitis leo sit. pain and trouble that are bound to ensue weakness
              of will, which is the same as saying through shrinking.
            </Typography>
            <Stack rowGap={2}>
              {[
                "Save Ecology Begin by Planting Trees",
                "Eco System amet for Global Warnings",
                "People to Clean the Air and Safe Rivers",
              ].map((item, i) => (
                <Paper
                  key={i}
                  sx={{
                    p: (theme) => theme.spacing(4),
                    bgcolor: (theme) => theme.palette.background.alternate,
                    boxShadow: "none",
                  }}
                >
                  <Typography>{item}</Typography>
                </Paper>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
