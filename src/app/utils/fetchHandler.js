import { cache } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Native fetch handler for Next.js App Router with built-in caching and deduplication.
 * @param {string} endpoint - The API endpoint (e.g., '/home')
 * @param {Object} options - Fetch options including next.revalidate
 */
export const fetchHandler = cache(async (endpoint, options = {}) => {
  const url = `${baseURL}/api/v1${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
      next: {
        revalidate: 60, // Default ISR revalidation time in seconds
        ...options.next,
      },
    });

    const result = await response.json();

    return {
      success: result?.success || response.ok,
      message: result?.message || response.statusText,
      data: result?.data,
    };
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
});
