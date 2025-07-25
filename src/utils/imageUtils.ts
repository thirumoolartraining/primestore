// Import all images from the public directory using the recommended query parameter
const imageModules = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp,svg,gif}', { 
  eager: true,
  query: '?url',
  import: 'default'
});

/**
 * Get the correct image URL for both development and production
 * @param path Path relative to the public directory (e.g., 'images/products/example.png')
 * @returns The URL to the image
 */
export const getImageUrl = (path: string): string => {
  try {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const fullPath = `/public/${cleanPath}`;
    
    // In development, use the direct path
    if (import.meta.env.DEV) {
      return `/${cleanPath}`;
    }
    
    // In production, use the imported module if available
    if (imageModules[fullPath]) {
      return imageModules[fullPath] as string;
    }
    
    // Fallback to direct path
    return `/${cleanPath}`;
  } catch (error) {
    console.error('Error loading image:', path, error);
    return '';
  }
};

// Export a function to get all product images
export const getProductImages = (productName: string) => {
  const basePath = `images/products/${productName}`;
  return [1, 2, 3, 4].map(num => getImageUrl(`${basePath}/${num}.png`));
};
