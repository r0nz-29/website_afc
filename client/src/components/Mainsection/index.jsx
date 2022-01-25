import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "../Carousel";
import FloatingDonateCard from "../FloatingDonateCard";
const slide1 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1642427222/vzktxei9alclag51sey3.png";
const slide2 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1642425253/wm2qqamzbfjj3qfyeiqu.jpg";
const slide3 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1641464337/osq64tfijhpto1ly6tbx.png";
const slide4 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1641464188/ia3dhvl5ov5bnm0rjyxd.png";
const slide5 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1641463706/lztma0jilc3f5wccovog.jpg";
const slide6 =
  "https://res.cloudinary.com/daa4wqa2h/image/upload/v1641464125/vhj4nubozvbcpmknfvb2.png";

export default function Mainsection() {
  const lessThan1304 = useMediaQuery(`(max-width: 1304px)`);
  const lessThan720 = useMediaQuery(`(max-width: 720px)`);
  const lessThan400 = useMediaQuery(`(max-width: 400px)`);
  const lessThan580 = useMediaQuery(`(max-width: 580px)`);
  return (
    <Box sx={{ position: "relative" }}>
      <Carousel
        height={window.innerHeight - 96}
        slides={[slide1, slide2, slide3, slide4, slide5, slide6]}
        showArrows={!lessThan720}
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
        <Box
          sx={{
            mt: (theme) => theme.spacing(lessThan400 ? 25 : 35),
            width: "fit-content",
            p: (theme) => theme.spacing(4),
            borderRadius: (theme) => theme.shape.borderRadius,
            backdropFilter: "blur(20px)",
            transform: "translateY(-25%)",
          }}
        >
          <Typography variant="h5" color="white">
            Welcome to
            <Typography
              color="white"
              fontSize="30px"
              fontFamily="asly_brush"
              component="span"
              pl="16px"
            >
              Art for Charity
            </Typography>
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="white"
            sx={{ textTransform: "uppercase" }}
          >
            Alone we can do so little
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bolder"
            color="white"
            sx={{ textTransform: "uppercase" }}
            mb={lessThan400 ? (theme) => theme.spacing(5) : 0}
          >
            but together so much
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: (theme) => theme.spacing(4),
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
          >
            Read more
          </Button>
        </Box>
      </Container>
      {!lessThan580 && <FloatingDonateCard />}
    </Box>
  );
}
