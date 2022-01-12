import WhatWeDo from "./components/WhatWeDo";
import TrustSection from "./components/TrustSection";
import Mainsection from "./components/Mainsection";
import JoinSection from "./components/JoinSection";
import ImageDivider from "./components/ImageDivider";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Box className="App">
      <Header />
      <Mainsection />
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
