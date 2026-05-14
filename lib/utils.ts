import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

export function formatRelativeTime(date: string) {
  const diffHours = Math.round(
    (new Date(date).getTime() - Date.now()) / (1000 * 60 * 60)
  );

  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (Math.abs(diffHours) < 24) {
    return formatter.format(diffHours, "hour");
  }

  return formatter.format(Math.round(diffHours / 24), "day");
}

export function truncateHash(hash: string, length = 10) {
  return `${hash.slice(0, length)}...${hash.slice(-length + 2)}`;
}

