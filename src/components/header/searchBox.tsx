"use client";
import { useDebounceCallback } from "usehooks-ts";

import { useSearchStore } from "@/store/search-store";

const SearchBox = () => {
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);

  const debouncedFilter = useDebounceCallback(setSearch, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFilter(e.target.value);
  };

  return (
    <div className="mx-auto flex w-full items-center rounded-md border-2 px-4 focus-within:border-orange-500">
      <input
        type="text"
        className="w-full flex-grow py-1.5 outline-none placeholder:text-base focus:border-orange-500"
        placeholder="Search items"
        defaultValue={search}
        onChange={handleInputChange}
      />

      <button>
        <svg
          className="h-5 w-5 text-gray-500"
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
