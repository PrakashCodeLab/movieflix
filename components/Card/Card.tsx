import { MovieDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imagePlace from '@/public/placeholder.jpg'
const Card = ({
  Title,
  Year,
  Poster,
  Type,
  imdbID,
}: MovieDataProps ) => {

  const posterUrl = Poster !== 'N/A' ? Poster : imagePlace;


  return (
    <div className="movie-card rounded-lg w-[300px]  h-[500px] flex flex-col justify-center items-center shadow-md  hover:shadow-2xl  bg-white dark:bg-slate-900">
      <div className="overflow-hidden py-1 px-1">
        <Image 
          src={posterUrl}
          alt={Title}
          className=" object-contain rounded-lg"
          width={300}
          height={200}
          placeholder = 'empty'
          priority={true} 
        />
      </div>
      <div className="content p-4">
        <h2 className="text-base  dark:text-gray-200 w-[200px]  font-semibold mb-2">{Title}</h2>
       
        <div className="info flex justify-between mb-4">
          
          <span className="text-gray-800 dark:text-gray-300">Year: {Year}</span>
          <span className="text-gray-700 dark:text-gray-300">
            Type: {Type}
          </span>
        </div>
        <div className="buttons flex justify-around items-center">
           
        <Link
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb-button bg-blue-700  capitalize hover:bg-sky-800 text-white py-2 px-4 rounded "
          >
             trailer
          </Link>
         
          <Link
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb-button  bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded "
          >
            IMDb
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
