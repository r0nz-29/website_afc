import WhatWeDo from "./components/WhatWeDo";
import TrustSection from "./components/TrustSection";
import Mainsection from "./components/Mainsection";
// import JoinSection from "./components/JoinSection";
import ImageDivider from "./components/ImageDivider";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { Box, useMediaQuery } from "@mui/material";
import Footer from "./components/Footer";
import FixedDonateCard from "./components/FixedDonateCard";
import "./App.css";
import { Route, Routes } from "react-router";
import JoinUs from "./components/JoinUs";
import Donations from "./components/Donations";

const Home = () => {
  const lessThan580 = useMediaQuery(`(max-width: 580px)`);
  return (
    <Box>
      <Mainsection />
      {lessThan580 && <FixedDonateCard />}
      <TrustSection />
      <WhatWeDo />
      <ImageDivider />
      <Donations />
      {/* <JoinSection /> */}
      <Testimonials />
    </Box>
  );
};

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
