import './App.sass'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Aeropress from "./components/Aeropress.jsx"

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#432d27'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#6b3b2f',
    },
  },
});

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Koff.ie</h1>
         <Aeropress coffee={20} />       
      </div>
    </ThemeProvider>
    
  )
}

