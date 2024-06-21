// components/SearchBox.js
'use client'
import { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e:any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="flex  items-center border-2  rounded-md p-3 m-3  focus-within:border-orange-500">
      <input
        type="text"
        className="flex-grow outline-none focus:border-orange-500"
        placeholder="Search here"
        value={query}

        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.9-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
