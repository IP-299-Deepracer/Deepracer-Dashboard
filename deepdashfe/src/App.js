import logo from './assets/deepracer.png';
import './App.css';
import TabPanel from "./components/tabpanel/tabpanel"
import { createTheme, colors, ThemeProvider } from '@mui/material';
import NavBar from "./components/navbar/navbar"
import TempDraw from "./components/drawer/temporarydrawer"

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: colors.deepPurple[500],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
  <ThemeProvider theme={theme}>
      <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deepracer Dash
        </p>
        <a
          className="App-link"
          href="https://github.com/IP-299-Deepracer/Deepracer-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  </ThemeProvider>
    
  );
}

export default App;
