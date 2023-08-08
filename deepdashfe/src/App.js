import logo from './assets/deepracer.png';
import './App.css';
// import TabPanel from "./components/tabpanel/tabpanel"
import { createTheme, colors, ThemeProvider } from '@mui/material';
import NavBar from "./components/navbar/navbar"
// import TempDraw from "./components/drawer/temporarydrawer"

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
      <NavBar />
      <Main />
    </div>
    </ThemeProvider>
  );
}

export default App;
