import React from "react";

const Search = () => {
  return (
    <div className="flex pt-3 items-center justify-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here"
          className="pl-4 pr-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.1-3.9A7.5 7.5 0 1114.95 3.6a7.5 7.5 0 014.35 4.35z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
