"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import RewardsCard from "../../../components/Kitchen/KitchenRewards/RewardsCard";
import AddNewRewards from "@/components/Kitchen/KitchenRewards/AddNewRewards";

const rewardItems = [
  {
    name: "Free Dessert",
    description: "Get a free dessert with any purchase",
    points: 500,
  },
  {
    name: "Free Appetizer",
    description: "Get a free appetizer with any purchase",
    points: 1000,
  },
  {
    name: "Free Entree",
    description: "Get a free entree with any purchase",
    points: 1500,
  },
  {
    name: "Free Drink",
    description: "Get a free drink with any purchase",
    points: 2000,
  },
  {
    name: "Free Meal",
    description: "Get a free meal with any purchase",
    points: 2500,
  },
  {
    name: "Free Dessert",
    description: "Get a free dessert with any purchase",
    points: 3000,
  },
  {
    name: "Free Appetizer",
    description: "Get a free appetizer with any purchase",
    points: 3500,
  },
  {
    name: "Free Entree",
    description: "Get a free entree with any purchase",
    points: 4000,
  },
  {
    name: "Free Drink",
    description: "Get a free drink with any purchase",
    points: 4500,
  },
  {
    name: "Free Meal",
    description: "Get a free meal with any purchase",
    points: 5000,
  },
  {
    name: "Free Dessert",
    description: "Get a free dessert with any purchase",
    points: 5500,
  },
  {
    name: "Free Appetizer",
    description: "Get a free appetizer with any purchase",
    points: 6000,
  },
  {
    name: "Free Entree",
    description: "Get a free entree with any purchase",
    points: 6500,
  },
  {
    name: "Free Drink",
    description: "Get a free drink with any purchase",
    points: 7000,
  },
  {
    name: "Free Meal",
    description: "Get a free meal with any purchase",
    points: 7500,
  },
  {
    name: "Free Dessert",
    description: "Get a free dessert with any purchase",
    points: 8000,
  },
  {
    name: "Free Appetizer",
    description: "Get a free appetizer with any purchase",
    points: 8500,
  },
];

const AddRewards = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-bold">Redeem Management</span>
          <p>Manage your loyalty Program rewards</p>
        </div>
        <AddNewRewards />
      </div>
      <ScrollArea className="h-screen pb-44">
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewardItems.map((item, index) => (
            <RewardsCard key={index} item={item} />
          ))}
        </div>
      </ScrollArea>
    </main>
  );
};

export default AddRewards;
