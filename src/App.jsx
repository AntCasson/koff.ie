import './App.sass'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Aeropress from "./components/Aeropress.jsx"

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#606c88'
    },
    secondary: {
      
      main: '#ebf2fa',
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

