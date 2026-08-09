import React from 'react'
import { useState, useEffect } from 'react';
import {FaSun, FaMoon} from "react-icons/fa";

const Darkmode = () => {

    const [theme, setTheme]= useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light");

    useEffect(()=>{
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
        }else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem(theme, "light");

        }
    },[theme]);

  return (
    <div onClick={()=> setTheme(theme === "light"? "dark" : "light")} className="cursor-pointer" >
      {theme==="light"? <FaMoon  className= "text-xl"   /> :  <FaSun className="text-xl"  / > }
    </div>
  )
}

export default Darkmode
