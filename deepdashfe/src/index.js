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

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/home' Component={Home}></Route>
      <Route exact path='/leaderboard' Component={Leaderboard}></Route>
      <Route exact path='/statistics' Component={Statistics}></Route>
      <Route exact path='/uploaddata' Component={Upload}></Route>
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