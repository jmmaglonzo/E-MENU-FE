"use client";
import React, { useRef } from "react";
import categoryItems from "@/utils/categoryItems";
const MenuTab = () => {
  const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (e.target) {
      e.target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  return (
    <div className="container mt-2 flex items-center gap-2 text-xs">
      {categoryItems.slice(0, 1).map((item, index) => (
        <button
          key={index}
          ref={(e: any) => (buttonRef.current[index] = e)}
          className="flex items-center justify-center space-x-1 rounded-sm px-2 py-1.5 text-sm font-semibold text-gray-500 shadow-md hover:bg-zinc-200 focus:bg-orange-400 focus:text-white"
        >
          {item.title}
        </button>
      ))}
      <div className="flex justify-between gap-x-2 overflow-x-scroll whitespace-nowrap py-2 no-scrollbar">
        {/* rendering tab item title */}

        {categoryItems.slice(1).map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-x-5">
            <button
              ref={(e: any) => (buttonRef.current[index] = e)}
              onFocus={handleFocus}
              className="flex items-center justify-center space-x-1 rounded-sm px-2 py-1.5 text-sm font-semibold text-gray-500 shadow-md hover:bg-zinc-200 focus:bg-orange-400 focus:text-white"
            >
              {item.icon}
              <span className="truncate">{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuTab;
