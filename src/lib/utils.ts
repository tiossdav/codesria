import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to Nigerian format (DD/MM/YY) with timezone awareness
 * @param date Date to format or date string
 * @param includeTime Whether to include time in the output
 * @returns Formatted date string in DD/MM/YY format in Nigeria timezone
 */
export function formatDate(
  date: Date | string | number,
  includeTime: boolean = false
): string {
  const dateObj = date instanceof Date ? date : new Date(date);

  // Get date components in Nigeria timezone
  const nigeriaDate = new Date(
    dateObj.toLocaleString("en-US", { timeZone: "Africa/Lagos" })
  );

  const day = nigeriaDate.getDate().toString().padStart(2, "0");
  const month = (nigeriaDate.getMonth() + 1).toString().padStart(2, "0");
  const year = nigeriaDate.getFullYear().toString().slice(-2);

  let formattedDate = `${day}/${month}/${year}`;

  // Add time if requested
  if (includeTime) {
    const timeString = dateObj.toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const timePart = timeString.split(", ")[1] || timeString;
    formattedDate += ` ${timePart.toLowerCase()}`;
  }

  return formattedDate;
}

/**
 * Format a date for use with date pickers in Nigerian format (DD/MM/YY) with timezone awareness
 * To be used in place of date-fns format(date, "PPP")
 * @param date The date to format
 * @returns Formatted date string in DD/MM/YY format in Nigeria timezone
 */
export function formatDatePicker(date: Date): string {
  // Get date components in Nigeria timezone
  const nigeriaDate = new Date(
    date.toLocaleString("en-US", { timeZone: "Africa/Lagos" })
  );

  const day = nigeriaDate.getDate().toString().padStart(2, "0");
  const month = (nigeriaDate.getMonth() + 1).toString().padStart(2, "0");
  const year = nigeriaDate.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
}

/**
 * Format a date with full Nigerian locale and timezone
 * @param date Date to format
 * @param options Additional formatting options
 * @returns Formatted date string with Nigerian locale and timezone
 */
export function formatDateNigeria(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = date instanceof Date ? date : new Date(date);

  const defaultOptions: Intl.DateTimeFormatOptions = {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  };

  return dateObj.toLocaleString("en-NG", defaultOptions);
}

/**
 * Format a datetime with Nigerian timezone for detailed display
 * @param date Date to format
 * @returns Full datetime string with Nigerian timezone
 */
export function formatDateTime(date: Date | string | number): string {
  const dateObj = date instanceof Date ? date : new Date(date);

  return dateObj.toLocaleString("en-NG", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Get current Nigerian time
 * @returns Current date and time in Nigerian timezone
 */
export function getNigeriaTime(): Date {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })
  );
}
