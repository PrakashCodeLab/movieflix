"use client";
import React, { useEffect, useState } from 'react';


interface SearchBarProps {
  handleSearch: () => void;
  Search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


const SearchBar: React.FC<SearchBarProps> = ({handleSearch,Search,setSearch}) => {
 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch();
      };
return (
    <section className='w-full max-w-[1250px] p-4 grid place-items-center'>
      <form className='max-w-[600px] w-full' onSubmit={handleSubmit}>
        <div className='w-full flex justify-center items-center'>
          <input
            type='text'
            placeholder='Search the movies'
            className='w-full px-4 py-2 border border-gray-300 dark:bg-gray-100 dark:text-gray-900 capitalize rounded-md focus:outline-none bg-slate-200 focus:ring dark:focus:border-blue-300 focus:border-gray-50'
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button
            type='submit'
            className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
