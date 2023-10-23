import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserContext } from "./UserContext";
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
import Otp from "./scenes/Authentication/OTP";

function App() {
  const [theme, colorMode] = useMode(); // Theme and color mode
  const [isSidebar, setIsSidebar] = useState(true); // Sidebar state
  const [user, setUser] = useState(null); // User state

  // Get current route
  const getCurrentRoute = () => {
    return window.location.pathname;
  };

  // Handle authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Handle sidebar
  useEffect(() => {
    const currentRoute = getCurrentRoute();
    if (currentRoute === "/") {
      setIsSidebar(false);
    } else {
      setIsSidebar(true);
    }
  }, [isSidebar]);

  return (
    <UserContext.Provider value={user}>
      <colourModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {getCurrentRoute() !== "/" &&
              getCurrentRoute() !== "/login" &&
              getCurrentRoute() !== "/register" &&
              getCurrentRoute() !== "/otp" && <Sidebar isSidebar={isSidebar} />}
            <main className="content">
              {getCurrentRoute() !== "/" &&
                getCurrentRoute() !== "/login" &&
                getCurrentRoute() !== "/register" &&
                getCurrentRoute() !== "/otp" && (
                  <Topbar setIsSidebar={setIsSidebar} />
                )}
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
                <Route path="/otp" element={<Otp />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </colourModeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
