import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define theme colors
const lightColors = {
  primary: "#3F51B5",
  primaryLight: "rgba(63, 81, 181, 0.2)",
  primaryDark: "#303F9F",
  accent: "#FFC107",
  accentLight: "rgba(255, 193, 7, 0.2)",
  success: "#4CAF50",
  successLight: "rgba(76, 175, 80, 0.2)",
  warning: "#FF9800",
  warningLight: "rgba(255, 152, 0, 0.2)",
  error: "#F44336",
  errorLight: "rgba(244, 67, 54, 0.2)",
  background: "#FFFFFF",
  card: "#F5F5F5",
  text: "#212121",
  textSecondary: "#757575",
  border: "#E0E0E0",
  tabIconDefault: "#BDBDBD",
};

const darkColors = {
  primary: "#5C6BC0",
  primaryLight: "rgba(92, 107, 192, 0.2)",
  primaryDark: "#3F51B5",
  accent: "#FFD54F",
  accentLight: "rgba(255, 213, 79, 0.2)",
  success: "#66BB6A",
  successLight: "rgba(102, 187, 106, 0.2)",
  warning: "#FFA726",
  warningLight: "rgba(255, 167, 38, 0.2)",
  error: "#EF5350",
  errorLight: "rgba(239, 83, 80, 0.2)",
  background: "#121212",
  card: "#1E1E1E",
  text: "#FFFFFF",
  textSecondary: "#B0B0B0",
  border: "#333333",
  tabIconDefault: "#616161",
};

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  colors: typeof lightColors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  colors: lightColors,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme() as ThemeType;
  const [theme, setTheme] = useState<ThemeType>(systemColorScheme || "light");
  
  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme as ThemeType);
        }
      } catch (error) {
        console.log("Failed to load theme preference:", error);
      }
    };
    
    loadTheme();
  }, []);
  
  // Save theme preference when it changes
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem("theme", theme);
      } catch (error) {
        console.log("Failed to save theme preference:", error);
      }
    };
    
    saveTheme();
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  
  const colors = theme === "light" ? lightColors : darkColors;
  
  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);