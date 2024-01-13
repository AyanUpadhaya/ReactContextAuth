import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../provider/ThemeProvider";
import LightMoon from "./svg/LighMoon";
import DarkMoon from "./svg/DarkMoon";
import LightSun from "./svg/LightSun";
import DarkSun from "./svg/DarkSun";
const DarkModeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={`w-[64px] h-[32px] p-1 border rounded-[100px] ${
        theme == "dark"
          ? "bg-nutralColorNineHundread border border-primaryNineHundread"
          : "bg-white"
      } flex justify-between ${
        theme == "dark" ? "flex-row-reverse " : "flex-row"
      } items-center transition-all shadow-xl`}
      onClick={() => toggleTheme()}
    >
      <span>
        {theme == "dark" ? (
          <p className="h-6 w-6 p-1 rounded-full bg-primary grid place-content-center">
            <DarkMoon />
          </p>
        ) : (
          <LightSun />
        )}
      </span>
      <span>
        {theme == "dark" ? (
          <p className="h-4 w-6 p-4 rounded-full  grid place-content-center">
            <DarkSun />
          </p>
        ) : (
          <LightMoon />
        )}
      </span>
    </button>
  );
};

export default DarkModeButton;
