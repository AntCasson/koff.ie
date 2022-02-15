import "./App.sass";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import Aeropress from "./components/Aeropress.jsx";
import Cleverdripper from "./components/Cleverdripper.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BEE3DB"
    },
    secondary: {
      main: "#BEE3DB"
    },
    accent: {
      main: "#EF798A"
    }
  }
});

export default function App() {
  const [showAeropress, setShowAeropress] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Nav showAero={setShowAeropress} />
        {showAeropress ? <Aeropress /> : <Cleverdripper />}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
