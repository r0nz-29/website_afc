import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ArrowButton({ onClick, children }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        boxShadow: (theme) => theme.shadows[5],
        textAlign: "center",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
    >
      {children}
    </IconButton>
  );
}

function NavigationBox({ left, right, children }) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: right && 10,
        left: left && 10,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {children}
    </Box>
  );
}

function BoundingBox({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}

export default function Carousel({ height, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  function decrement() {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function increment() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <BoundingBox>
      <NavigationBox left>
        <ArrowButton onClick={decrement}>
          <ArrowBackIosNewIcon />
        </ArrowButton>
      </NavigationBox>
      <NavigationBox right>
        <ArrowButton onClick={increment}>
          <ArrowForwardIosIcon />
        </ArrowButton>
      </NavigationBox>
      <img
        src={slides[currentSlide]}
        alt="slide"
        width="100%"
        height={height}
      />
    </BoundingBox>
  );
}
