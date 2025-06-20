import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Ensures proper TSX handling
      babel: {
        plugins: [], // Add any needed babel plugins here
      },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    open: true, // Automatically open browser
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Prioritize TS files
  },
  esbuild: {
    loader: 'tsx', // Force TSX processing
  },
  assetsInclude: ['**/*.avif'],
  build: {
    outDir: 'dist', // Build output directory
    sourcemap: true, // Optional: generate source maps for easier debugging
  },
  base: './', // Ensures relative paths for FTP deployment (like GoDaddy)
});
