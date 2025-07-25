import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    plugins: [react()],
    // Base URL handling - use absolute path in production, relative in development
    base: isProduction ? '/' : '/',
    
    // Public directory configuration
    publicDir: 'public',
    
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true, // Enable source maps for debugging
      rollupOptions: {
        output: {
          // Let Vite handle the default asset naming
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    
    // Development server configuration
    server: {
      port: 3000,
      strictPort: true,
    },
    
    // Preview configuration
    preview: {
      port: 3000,
      strictPort: true,
    },
  };
});
