import "./global.sass";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import Aeropress from "./components/Aeropress.jsx";
import Cleverdripper from "./components/Cleverdripper.jsx";
import Nav from "./components/Nav.jsx";
import TextInfo from "./components/TextInfo";
import Footer from "./components/Footer";
import Textinfo from "./components/TextInfo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BEE3DB"
    },
    secondary: {
      main: "#FF9F1C"
    },
    accent: {
      main: "#294C60"
    }
  }
});

export default function App() {
  const [showAeropress, setShowAeropress] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Nav showAero={setShowAeropress} />
      <div className='layout-wrapper'>
        {showAeropress ? <Aeropress /> : <Cleverdripper />}
        <Textinfo showAeropress={showAeropress} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
