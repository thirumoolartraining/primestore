/**
 * Utility function to get the correct image path for both development and production
 * @param path The image path relative to the public directory (e.g., '/images/products/example.png')
 * @returns The correct image path
 */
export const getImageUrl = (path: string): string => {
  // Remove leading slash if present to handle both cases
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, the path is relative to the public directory
  // In production, the path is relative to the root
  return `/${cleanPath}`;
};
