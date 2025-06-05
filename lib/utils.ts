import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string): string => {
    const colors: Record<string, string> = {
        science: "#E5D0FF",
        maths: "#FFDA6E",
        english: "#BDE7FF",
    };
    return colors[subject] || "#CCCCCC"; // Default fallback
};
