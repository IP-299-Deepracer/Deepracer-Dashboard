import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


// colour design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        purpleAccent: {
          200:"#b39ddb",      
          300:"#9575cd",
          400:"#7e57c2",
          500:"#673ab7",
          600:"#5e35b1",
          700:"#512da8",
          800:"#4527a0",
          900:"#311b92",
        },
        orangeAccent: {
          200:"#ef6c00",      
          300:"#f57c00",
          400:"#fb8c00", 
          500:"#ff9800",
          600:"#ffa726",
          700:"#ffb74d",
          800:"#ffcc80",
        },
        navyAccent: {
          900: "#161e2c"
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        purpleAccent: {
          200:"#311b92",    
          300:"#4527a0",
          400:"#512da8",
          500:"#5e35b1",
          600:"#673ab7",
          700:"#7e57c2",
          800:"#9575cd",
          900:"#b39ddb",
        },

        orangeAccent: {
          200:"#ffcc80",      
          300:"#ffb74d",
          400:"#ffa726",
          500:"#ff9800",
          600:"#fb8c00",
          700:"#f57c00",
          800:"#ef6c00",
        },
        navyAccent: {
          900: "#161e2c"
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colours = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colours.orangeAccent[500],
            },
            secondary: {
              main: colours.purpleAccent[500],
            },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
              bg: colours.navyAccent[900]
            },
            background: {
              default: "#232f3e"
            },
          }
        : {
            primary: {
              main: colours.purpleAccent[300],
            },
            secondary: {
              main: colours.purpleAccent[500],
            },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
            },
            background: {
              default: "#232f3e"
            },
            // overrides: {
            //   Dashboard: {
            //     colorPrimary: {
            //       background: 'linear-gradient(to right, #ff8c00, #800080)',
            //     }
            //   }
            // }
          }),
          
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for colour mode
export const colourModeContext = createContext({
  toggleColourMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colourMode];
};
