import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import NavBar from "./components/navbar/navbar"

import Home from './pages/home.js';
import Leaderboard from './pages/leaderboard';
import Statistics from './pages/statistics';
import Upload from './pages/upload';
import Help from './pages/help'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#aa00ff',
    },
    secondary: {
      main: '#f06292',
    },
    text: {
      primary: {
        main: colors.grey[50],
      },
      // this is the tabs text colour, among other things
      secondary: {
        main: colors.grey[50],
      },
    },
    background: {
      // paper is the drawer background colour
      paper: colors.pink[100],
      default: colors.pink[100],
    }
  },
  overrides: {
    NavBar: {
      colorPrimary: {
        background: 'linear-gradient(to right, #fffff, #FF4500)', 
      },
    },
  },
});

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/home' Component={Home}></Route>
      <Route exact path='/leaderboard' Component={Leaderboard}></Route>
      <Route exact path='/statistics' Component={Statistics}></Route>
      <Route exact path='/uploaddata' Component={Upload}></Route>
      <Route exact path='/projectinformation' Component={Help}></Route>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <div className='App'>
    <NavBar/>
    <Main /> {/* The various pages will be displayed by the `Main` component. */}
    </div>
  </ThemeProvider>
  </BrowserRouter>
  ), document.getElementById('root')
);