import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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