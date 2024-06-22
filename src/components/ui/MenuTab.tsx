"use client";
import React, { useRef } from "react";
import categoryItems from "../../../api/categoryItems";
import Image from "next/image";

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
    <div className="container mt-2 flex justify-center text-xs">
      <div className="flex justify-between gap-x-2 overflow-x-scroll whitespace-nowrap py-2 no-scrollbar">
        {/* rendering tab item title */}
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-x-5"
          >
            <button
              ref={(e: any) => (buttonRef.current[index] = e)}
              onFocus={handleFocus}
              className="flex w-[100px] flex-col items-center rounded-sm py-3 shadow-md hover:bg-zinc-200 focus:bg-orange-400 focus:text-white"
            >
              <span>
                {item.img && (
                  <div className="relative aspect-square h-10 w-10">
                    <Image
                      className="rounded-full focus:bg-orange-400"
                      fill
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                )}
              </span>

              <span className="truncate">{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuTab;
