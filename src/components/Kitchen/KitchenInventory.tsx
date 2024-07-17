"use client";
import React, { useState, useMemo } from "react";
import { FilterIcon, ListOrderedIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import KitchenProducts from "./KitchenProducts";
import { ScrollArea } from "../ui/scroll-area";
import KitchenModal from "./KitchenModal/KitchenModal";
import { useGetProducts } from "@/services/queries";
import SearchBox from "../header/searchBox";
import { useMenuStore } from "@/store/menuTab-store";
import { useSearchStore } from "@/store/search-store";
import KitchenSearch from "../common/KitchenSearch";
import KitchenLoader from "../common/KitchenLoader";

type SortOption = "priceAsc" | "priceDesc" | null;
type StockFilter = "all" | "inStock" | "lowStock" | "outOfStock";

const KitchenInventory: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProducts();
  const selected = useMenuStore((state) => state.selected);
  const search = useSearchStore((state) => state.search);
  const [sortOption, setSortOption] = useState<SortOption>(null);
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");

  const filteredItems = useMemo(() => {
    let items = products;

    if (selected !== "all") {
      items = items?.filter((food) => food.categories.includes(selected));
    }

    if (search !== "") {
      items = items?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (stockFilter) {
      case "inStock":
        items = items?.filter((product) => product.quantity > 10);
        break;
      case "lowStock":
        items = items?.filter(
          (product) => product.quantity > 0 && product.quantity <= 10,
        );
        break;
      case "outOfStock":
        items = items?.filter((product) => product.quantity === 0);
        break;
    }

    if (sortOption === "priceAsc") {
      return items?.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      return items?.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [products, search, selected, sortOption, stockFilter]);

  const handleSortChange = (value: string) => {
    setSortOption(value as SortOption);
  };

  const handleStockFilterChange = (value: string) => {
    setStockFilter(value as StockFilter);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex w-full flex-col justify-center gap-4 md:flex-row md:items-center">
          <SearchBox />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="h-3 w-3 text-sm md:h-4 md:w-4 md:text-base" />
                  Filter by Stock
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  value={stockFilter}
                  onValueChange={handleStockFilterChange}
                >
                  <DropdownMenuRadioItem value="all">
                    All Items
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="inStock">
                    In Stock (&gt;10)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="lowStock">
                    Low Stock (1-10)
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="outOfStock">
                    Out of Stock
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="h-3 w-3 text-sm md:h-4 md:w-4 md:text-base" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  value={sortOption || ""}
                  onValueChange={handleSortChange}
                >
                  <DropdownMenuRadioItem value="priceAsc">
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priceDesc">
                    Price: High to Low
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <KitchenModal />
          </div>
        </div>
      </div>
      <ScrollArea className="h-screen pb-40">
        {search !== "" && filteredItems?.length === 0 ? (
          <KitchenSearch />
        ) : isLoading ? (
          <div className="container mt-64 flex justify-center">
            <KitchenLoader />
          </div>
        ) : filteredItems?.length === 0 ? (
          <div className="mt-8 text-center">
            {stockFilter === "outOfStock"
              ? "No out of stock items at the moment."
              : "No items found."}
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems?.map((item) => (
              <KitchenProducts key={item.id} card={item} />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default KitchenInventory;
