// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
// import Leaderboard from '../pages/Leaderboard';
// import Statistics from '../pages/Leaderboard';
// import Upload from '../pages/Leaderboard';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      {/* <Route exact path='/leaderboard' component={Leaderboard}></Route>
      <Route exact path='/statistics' component={Statistics}></Route>
      <Route exact path='/upload%20data' component={Upload}></Route> */}
    </Routes>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
);

export default Main;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
