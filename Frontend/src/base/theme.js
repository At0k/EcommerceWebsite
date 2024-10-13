// colorMode.js
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color design tokens export
export const tokens = {
  primary: {
    main: "#1A3E28", // Dark Green
  },
  secondary: {
    main: "#FBCB3A", // Soft Yellow
  },
  background: {
    default: "#F9F8F5", // Light Beige
  },
  text: {
    primary: "#3B2A1C", // Dark Brown
  },
};

// MUI theme settings
export const themeSettings = () => {
  const colors = tokens;
  return {
    palette: {
      primary: {
        main: colors.primary.main,
      },
      secondary: {
        main: colors.secondary.main,
      },
      background: {
        default: colors.background.default,
      },
      text: {
        primary: colors.text.primary,
      },
    },
    typography: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      h1: {
        fontSize: 32,
        fontWeight: "bold",
      },
      h2: {
        fontSize: 28,
        fontWeight: "bold",
      },
      h3: {
        fontSize: 24,
        fontWeight: "normal",
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = () => {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return [theme];
};
