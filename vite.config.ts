import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import type { PreRenderedAsset } from 'rollup';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  
  return {
    plugins: [react()],
    
    // Base URL handling - use absolute path in production, relative in development
    base: isProduction ? '/' : '/',
    
    // Public directory configuration
    publicDir: 'public',
    
    // Optimize dependencies
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true, // Enable source maps for debugging
      minify: 'terser',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Let Vite handle the default asset naming
          assetFileNames: (assetInfo: PreRenderedAsset) => {
            const fileName = assetInfo.name || 'asset';
            const ext = fileName.split('.').pop() || '';
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      // Enable brotli and gzip compression
      brotliSize: true,
      chunkSizeWarningLimit: 1000, // in kbs
    },
    
    // Resolve configuration
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    
    // Development server configuration
    server: {
      port: 3000,
      strictPort: true,
      open: true,
    },
    
    // Preview configuration
    preview: {
      port: 3000,
      strictPort: true,
    },
    
    // CSS configuration
    css: {
      devSourcemap: true,
    },
    
    // Environment variables
    define: {
      'process.env': {},
      __APP_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  };
});
