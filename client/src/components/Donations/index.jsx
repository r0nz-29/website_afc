import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Chart from "./PieChart";

export default function Donations() {
  const lessThan600 = useMediaQuery(`(max-width: 600px)`);
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.main,
        py: (theme) => theme.spacing(15),
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Stack rowGap={4}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="text.primary"
            mb={(theme) => theme.spacing(lessThan600 ? 2 : 10)}
          >
            Where will the donations go?
          </Typography>
          <Chart shrinked={lessThan600} />
        </Stack>
      </Container>
    </Box>
  );
}
