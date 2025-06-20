import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: { plugins: [] },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  esbuild: {
    loader: 'tsx',
  },
  assetsInclude: ['**/*.avif'],
  build: {
    outDir: 'dist', // 👈 build output directory
    sourcemap: true, // optional: generate source maps for debugging
  },
  base: './', // ensures relative paths (important for FTP deploy like GoDaddy)
});
