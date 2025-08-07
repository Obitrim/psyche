import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initials(value?: string, max: number = 2) {
  if (!value) return "";

  return value
    .split(" ")
    .slice(0, 2)
    .map((s) => s.charAt(0))
    .join("")
    .toUpperCase();
}
