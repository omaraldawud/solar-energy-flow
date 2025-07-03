import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this import

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [],
      },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 👈 this is what enables @/
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  esbuild: {
    loader: 'tsx',
  },
  assetsInclude: ['**/*.avif'],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  base: './',
});
