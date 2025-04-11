"use client";

// UTILITIES WRAPPER FUNCTIONS FOR LOCALSTORAGE 

export function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem<T>(key: string): T | null {
  const value = localStorage.getItem(key);

  try {

    return value ? JSON.parse(value) as T : null

  } catch {
    return null; // if JSON is malformed
  }
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}


