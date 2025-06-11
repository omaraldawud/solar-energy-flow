import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/pnw-react/', // 👈 This tells Vite where the app lives
  plugins: [react()]
});
