import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const readableDate = (date: string) => {
  return new Date(date).toLocaleDateString("fa", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const limitChar = (string: string, limit: number) => {
  if (string.length < limit) return string
  return string.substring(0, limit-3) + "..."
}