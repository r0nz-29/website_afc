import { Box, Button, Container, Typography } from "@mui/material";
import Carousel from "../Carousel";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/2.png";
import slide3 from "../../images/3.png";
import slide4 from "../../images/4.png";
import slide5 from "../../images/5.png";
import slide6 from "../../images/6.png";

export default function Mainsection() {
  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        height={window.innerHeight - 96}
        slides={[slide1, slide2, slide3, slide4, slide5, slide6]}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          variant="h5"
          color="white"
          mt={(theme) => theme.spacing(35)}
        >
          Welcome to kologi
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bolder"
          color="white"
          sx={{ textTransform: "uppercase" }}
        >
          Saving the world
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bolder"
          color="white"
          sx={{ textTransform: "uppercase" }}
        >
          Planting Trees
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            p: (theme) => theme.spacing(2),
            px: (theme) => theme.spacing(5),
            mt: (theme) => theme.spacing(4),
          }}
        >
          Read more
        </Button>
      </Container>
    </Box>
  );
}
