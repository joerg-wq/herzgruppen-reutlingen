import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Normalisiert eine deutsche Telefonnummer für tel:-Links. */
export function normalizePhoneForLink(display: string): string {
  const digits = display.replace(/\D/g, '');
  if (digits.startsWith('0')) return `+49${digits.slice(1)}`;
  if (!digits.startsWith('49')) return `+49${digits}`;
  return `+${digits}`;
}
