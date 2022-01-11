import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Mainsection from "./components/Mainsection";

function App() {
  return (
    <Box className="App">
      <Header />
      <Mainsection />
    </Box>
  );
}

export default App;
