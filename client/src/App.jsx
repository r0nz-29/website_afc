import WhatWeDo from "./components/WhatWeDo";
import TrustSection from "./components/TrustSection";
import Mainsection from "./components/Mainsection";
import JoinSection from "./components/JoinSection";
import ImageDivider from "./components/ImageDivider";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { Box, useMediaQuery } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import FixedDonateCard from "./components/FixedDonateCard";

function App() {
  const lessThan580 = useMediaQuery(`(max-width: 580px)`);
  return (
    <Box>
      <Header />
      <Mainsection />
      {lessThan580 && <FixedDonateCard />}
      <TrustSection />
      <WhatWeDo />
      <ImageDivider />
      <JoinSection />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default App;
