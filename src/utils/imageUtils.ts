/**
 * Utility function to get the correct image path for both development and production
 * @param path The image path relative to the public directory (e.g., 'images/products/example.png')
 * @returns The correct image path
 */
export const getImageUrl = (path: string): string => {
  // Remove any leading slashes to ensure consistent path formatting
  const cleanPath = path.replace(/^\/+/, '');
  
  // In Vite, during development, the path is relative to the project root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use absolute paths from the root
  // Vercel serves files from the root, so we can use absolute paths
  return `/${cleanPath}`;
};

// This is a workaround for Vercel's static file serving
// It ensures that the images are copied to the correct location during build
// and that the paths are correctly referenced in the built files

// For development, you can also use the public directory directly:
// <img src="/images/example.png" alt="Example" />
// But using this utility function ensures consistency across environments
