"use client";

import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TogglrBar } from "..";
import Link from "next/link";

const Headeer = () => {
 

  return (
    <header className="dark:bg-slate-900 bg-[#2196F3] shadow-lg w-full  grid place-items-center ">
      <nav className="w-full max-w-[1250px] flex items-center justify-around py-6">
        <div>
          <h3 className="text-white uppercase cursor-pointer text-[1.3rem] font-bold ">
             MovieFlix
          </h3>
        </div>
        <div className="flex gap-5 text-[1.5rem] ">
          <TogglrBar/>



           <Link href={'https://github.com/PrakashCodeLab/movieflix.git'} target="_blank"> <AiOutlineGithub className={`cursor-pointer text-gray-200 text-[1.5rem]`} /></Link>
         
         
          <Link href={'https://www.linkedin.com/in/prakash-tech-20977826a/'} target="_blank">
             <AiOutlineLinkedin className={` text-blue-200 cursor-pointer text-[1.5rem]`} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Headeer;
