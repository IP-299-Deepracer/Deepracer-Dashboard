import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Leaderboard from "./scenes/leaderboard";
import Footer from "./scenes/global/footer";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import TrainingData from "./scenes/trainingForm";
import LandingPage from "./scenes/landingPage";
import RaceForm from "./scenes/RaceDayForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colourModeContext, useMode } from "./theme";
import Login from "./scenes/Authentication/Login";
import Register from "./scenes/Authentication/Register";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const getCurrentRoute = () => {
    return window.location.pathname;
  };
  useEffect(() => {
    // setting the currentroute var to route
    const currentRoute = getCurrentRoute();
    if (currentRoute === "/") {
      // checks if the current path is root
      setIsSidebar(false); // if current page is root, then no side/top bar is shown
    } else {
      setIsSidebar(true); // else show the side/top bar
    }
  }, [isSidebar]);

  return (
    <colourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* checks to see if the current page is root or not */}
          {/* if not root page, login and registration page, the sidebar will be shown */}
          {getCurrentRoute() !== "/" &&
            getCurrentRoute() !== "/login" &&
            getCurrentRoute() !== "/register" && (
              <Sidebar isSidebar={isSidebar} />
            )}
          <main className="content">
            {/* checks to see if the current page is root or not */}
            {/* if not root page, login or registration page, then show the topbar */}
            {getCurrentRoute() !== "/" &&
              getCurrentRoute() !== "/login" &&
              getCurrentRoute() !== "/register" && (
                <Topbar setIsSidebar={setIsSidebar} />
              )}
            {/* Setting the routes for all the required pages in the dashboard application */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/training-data" element={<TrainingData />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/raceForm" element={<RaceForm />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          {/* The footer will be shown on all pages */}
          <Footer />
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
