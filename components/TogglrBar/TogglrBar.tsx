"use client"

import React, { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from 'next-themes';
const TogglrBar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();

    const setToggleLight = () => {
      setDarkMode(false);
      setTheme('light')
    };

    const setToggleDark =()=>{
        setDarkMode(true);
        setTheme('dark')
    }

    useEffect(()=>{
        if (theme === 'dark') {
            setDarkMode(true);
          } else {
            setDarkMode(false);
          }
    },[theme]);


  
  return (
    <div>
       {darkMode ? (
            <span onClick={setToggleLight}>
              <BsFillSunFill className={`text-yellow-200 cursor-pointer`} />
            </span>
          ) : (
            <span onClick={setToggleDark}>
              <BsFillMoonStarsFill className={`text-slate-800 cursor-pointer`} />
            </span>
          )}
    </div>
  );
}

export default TogglrBar;
