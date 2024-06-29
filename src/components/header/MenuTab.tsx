"use client";
import React, { useRef } from "react";
import categoryItems from "@/utils/categoryItems";
import { useMenuStore } from "@/store/menuTab-store";
const MenuTab = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const selected = useMenuStore((state) => state.selected);
  const setSelected = useMenuStore((state) => state.setSelected);

  const handleButtonClick = (value: string): void => {
    setSelected(value);
    const button = document.querySelector(`button[data-value="${value}"]`);
    if (button && scrollContainerRef.current) {
      button.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="container mt-1.5 flex items-center gap-3 py-1 text-base">
      {categoryItems.slice(0, 1).map((c) => (
        <button
          key={c.value}
          className={`${selected === c.value ? "bg-primary text-white" : "text-muted-foreground"} flex items-center gap-2 rounded-sm px-4 py-1 font-medium shadow-sm`}
          onClick={() => handleButtonClick(c.value)}
        >
          {c.label}
        </button>
      ))}

      <div
        className="flex items-center gap-3 overflow-x-scroll whitespace-nowrap py-1 no-scrollbar"
        ref={scrollContainerRef}
      >
        {categoryItems.slice(1).map((c) => (
          <button
            key={c.value}
            data-value={c.value}
            onClick={() => handleButtonClick(c.value)}
            className={`${selected === c.value ? "bg-primary text-white" : "text-muted-foreground"} flex items-center gap-2 rounded-sm px-4 py-1 font-medium shadow-sm`}
          >
            <span>{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default MenuTab;
