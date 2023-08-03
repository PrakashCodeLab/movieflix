"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Card, SearchBar } from "..";
import { MovieDataProps } from "@/types";

import { Suspense } from "react";
const MovieSec = () => {
  const [movie, setMovie] = useState<MovieDataProps[]>([]);

  const [search, setSearchMovies] = useState("");

  const url = " http://www.omdbapi.com/?&apikey=fab4a976";

  const fetchMovie = async (title: string) => {
    try {
      const res = await fetch(`${url}&s=${title}`);

      const data = await res.json();

      console.log(data.Search);

      setMovie(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie("batman");
  }, []);

  if (!movie ||movie.length === 0) {
    return ( <div>
      <p>loading ... </p>
    </div>)
    
  }

  const handleClick = () => {
    fetchMovie(search);
  };

  return (
    <section className="w-full ">
      <SearchBar
        handleSearch={handleClick}
        Search={search}
        setSearch={setSearchMovies}
      />

      <div className="flex flex-wrap gap-5 justify-center items-start mt-[3rem] mb-[3rem]">
        {movie.length > 0 ? (
          movie.map((movies, index) => (
            <div key={index} className="">
              <Card
                Title={movies.Title}
                Year={movies.Year}
                Poster={movies.Poster}
                Type={movies.Type}
                imdbID={movies.imdbID}
              />
            </div>
          ))
        ) : (
          <div>
            <p>not found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieSec;
