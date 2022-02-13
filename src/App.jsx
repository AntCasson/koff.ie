import './App.sass'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react'

import Aeropress from "./components/Aeropress.jsx"
import Cleverdripper from "./components/Cleverdripper.jsx"
import Nav from "./components/Nav.jsx"

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#BEE3DB'
    },
    secondary: {
      
      main: '#BEE3DB',
    },
  },
});

export default function App() {
  const [showAeropress, setShowAeropress] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
         <Nav showAero={setShowAeropress} />
         {showAeropress ? <Aeropress />  : <Cleverdripper /> }
      </div>
    </ThemeProvider>
    
  )
}

