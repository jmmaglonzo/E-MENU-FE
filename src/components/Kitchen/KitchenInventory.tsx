"use client";
import { Input } from "../ui/input";
import { SearchIcon, FilterIcon, ListOrderedIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import KitchenProducts from "./KitchenProducts";
import { ScrollArea } from "../ui/scroll-area";
import KitchenModal from "./KitchenModal/KitchenModal";
export interface Item {
  name: string;
  quantity: number;
  category: string;
}
const initialItems: Item[] = [
  { name: "Bacon", quantity: 12, category: "Main-Dish" },
  { name: "Beef Tenderloin", quantity: 12, category: "Soup" },
  { name: "Broccoli", quantity: 12, category: "Produce" },
  { name: "Cheddar Cheese", quantity: 12, category: "Dairy" },
  { name: "Chicken Breasts", quantity: 12, category: "Meat" },
  { name: "Eggs", quantity: 12, category: "Dairy" },
  { name: "Milk", quantity: 12, category: "Dairy" },
  { name: "Lettuce", quantity: 12, category: "Produce" },
  { name: "Potatoes", quantity: 12, category: "Produce" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
  { name: "Salmon Fillet", quantity: 12, category: "Seafood" },
];
const KitchenInventory: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-md border px-4">
            <SearchIcon className="h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search items"
              className="w-full border-none outline-none"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <FilterIcon className="h-3 w-3 md:h-4 md:w-4" />
                  Filter by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem className="p-2">
                  Category
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="p-2">
                  Price
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="p-2">
                  Brand
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="h-3 w-3 text-sm md:h-4 md:w-4 md:text-base" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="priceAsc" className="p-2">
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priceDesc" className="p-2">
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
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {initialItems.map((item, index) => (
            <KitchenProducts key={index} item={item} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default KitchenInventory;
