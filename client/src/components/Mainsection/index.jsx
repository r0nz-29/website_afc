import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "../Carousel";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/2.png";
import slide3 from "../../images/3.png";
import slide4 from "../../images/4.png";
import slide5 from "../../images/5.png";
import slide6 from "../../images/6.png";

export default function Mainsection() {
  const lessThan1304 = useMediaQuery(`(max-width: 1304px)`);
  const lessThan720 = useMediaQuery(`(max-width: 720px)`);
  const lessThan400 = useMediaQuery(`(max-width: 400px)`);
  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        height={window.innerHeight - 96}
        slides={[slide1, slide2, slide3, slide4, slide5, slide6]}
      />
      <Container
        maxWidth={lessThan1304 ? "sm" : "lg"}
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: lessThan720 ? "center" : "left",
        }}
      >
        <Typography
          variant="h5"
          color="white"
          mt={(theme) => theme.spacing(lessThan400 ? 25 : 35)}
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
          mb={lessThan400 ? (theme) => theme.spacing(5) : 0}
        >
          Planting Trees
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: (theme) => theme.spacing(4),
          }}
        >
          Read more
        </Button>
      </Container>
    </Box>
  );
}
