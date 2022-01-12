import { Box, Button, Container, Typography } from "@mui/material";
import divider from "../../images/divider_img.jpg";

export default function ImageDivider() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${divider})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        py: (theme) => theme.spacing(20),
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          color="white"
          fontWeight="bolder"
          mb={(theme) => theme.spacing(5)}
        >
          We Use the Support of 3,4500 <br /> People to Clean the Air and <br />{" "}
          Safe Rivers
        </Typography>
        <Button variant="contained" color="primary">
          Start Donating
        </Button>
      </Container>
    </Box>
  );
}
