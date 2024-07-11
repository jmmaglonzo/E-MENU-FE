import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { OrderStatus } from "@/types/myOrder";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const target = new Date(date);
  const month = MONTHS[target.getMonth()];
  const day = target.getDate();
  const year = target.getFullYear();
  const time = target.toLocaleTimeString();

  return `${month} ${day}, ${year} ${time}`;
}

export function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export function getStatusColor(status: OrderStatus) {
  const COLORS = {
    "PENDING": "bg-gray-500",
    "ONGOING": "bg-gray-900 text-white",
    "SERVED": "bg-orange-500 text-white",
    "COMPLETED": "bg-green-500 text-white",
    "CANCELLED": "bg-red-500 text-white"
  };

  return COLORS[status];
} 