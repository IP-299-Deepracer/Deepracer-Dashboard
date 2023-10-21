import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Leaderboard from "./scenes/leaderboard";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Scatter from "./scenes/pie";
import ModelEval from "./scenes/model-eval/ModelEval";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colourModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <colourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Scatter />} />
              <Route path="/line" element={<Line />} />
              <Route path="/model-eval" element={<ModelEval />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
