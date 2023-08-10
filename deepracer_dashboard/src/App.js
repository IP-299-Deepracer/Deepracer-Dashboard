import { colourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colourMode] = useMode();

  return (
    <colourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </colourModeContext.Provider>
  );
}

export default App;
