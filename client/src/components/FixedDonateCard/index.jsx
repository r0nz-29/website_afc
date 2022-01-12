import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export default function FixedDonateCard() {
  return (
    <Box
      sx={{
        p: (theme) => theme.spacing(6),
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={1}>
          <Stack
            justifyContent="space-between"
            height="100%"
            borderRight="20px solid green"
          >
            <Typography
              color="white"
              sx={{
                // borderLeft: "10px solid green",
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                transform: "rotateZ(180deg)",
              }}
            >
              56%
            </Typography>
            <Typography
              color="white"
              sx={{
                // borderLeft: "10px solid yellowgreen",
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                transform: "rotateZ(180deg)",
              }}
            >
              Raised
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={10}>
          <Stack>
            <Grid container spacing={5}>
              <Grid item>
                <Stack>
                  <Typography variant="h4" color="white" fontWeight="bold">
                    Save the World
                  </Typography>
                  <Typography
                    variant="body1"
                    color="yellowgreen"
                    fontWeight="bold"
                  >
                    Goal: 3600.00 USD
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ bgcolor: "black" }}>
                  Donate
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="body1"
              color="white"
              mt={(theme) => theme.spacing(4)}
              maxWidth="400px"
            >
              Dignissim cras tincidunt lobortis feugiat vivam at augue eget Id
              consectetur lorem ipsum is simply free text purus ut integer orci
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
