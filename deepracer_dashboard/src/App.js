import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Leaderboard from "./scenes/leaderboard";
import Footer from "./scenes/global/footer"
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import LandingPage from "./scenes/landingPage";
import Register from "./scenes/register";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colourModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const getCurrentRoute = () => {
    return window.location.pathname;
  };
  useEffect(() => {
    const currentRoute = getCurrentRoute();
    if (currentRoute === '/') {
      setIsSidebar(false);
    }
    else {
      setIsSidebar(true);
    }
  }, [isSidebar]);


  return (
    <colourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {getCurrentRoute() !== '/' && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {getCurrentRoute() !== '/' && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/regsiter" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
