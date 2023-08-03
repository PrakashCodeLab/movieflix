"use client";

import { MovieSec, SearchBar } from "@/components";
import loading from "./loading";
import { Suspense } from "react";
import { ThemeProvider } from 'next-themes'
export default function Home() {
  return (
  
     <main className="w-full  grid place-items-center dark:bg-slate-700 bg-slate-100 min-h-[85vh]">
      <div className="max-w-[1250px] w-full grid  place-content-center mt-[1.5rem]  py-3 px-1 ">
       
        <MovieSec />
      
        
      </div>
    </main>
 
    
  );
}
