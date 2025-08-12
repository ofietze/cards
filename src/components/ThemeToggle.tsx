import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`theme-card ${theme === "light" ? "flipped" : ""}`}>
        <div className="theme-card-inner">
          <div className="theme-card-front">
            <div className="theme-icon">☀️</div>
          </div>
          <div className="theme-card-back">
            <div className="theme-icon">🌙</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
