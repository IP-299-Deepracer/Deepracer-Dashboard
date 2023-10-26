import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { UserContext } from "./UserContext";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Leaderboard from "./scenes/leaderboard";
import Footer from "./scenes/global/footer";
import Bar from "./scenes/bar";
import JoinTeam from "./scenes/Team/index";
import Line from "./scenes/line";
import Scatter from "./scenes/pie";
import ModelEval from "./scenes/model-eval/ModelEval";
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

  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    const isAuthRoute = ["/", "/login", "/register", "/otp"].includes(
      currentRoute
    );

    setIsSidebar(!isAuthRoute);
  }, [location]);

  // Handle authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <colourModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {(() => {
              if (isSidebar) {
                return (
                  <>
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                      <Topbar setIsSidebar={setIsSidebar} />
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route
                          path="/training-data"
                          element={<TrainingData />}
                        />
                        <Route path="/joinTeam" element={<JoinTeam />} />
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
                  </>
                );
              } else {
                return (
                  <main className="content">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/leaderboard" element={<Leaderboard />} />
                      <Route path="/training-data" element={<TrainingData />} />
                      <Route path="/joinTeam" element={<JoinTeam />} />
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
                );
              }
            })()}
            <Footer />
          </div>
        </ThemeProvider>
      </colourModeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
