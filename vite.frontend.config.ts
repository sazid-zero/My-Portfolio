import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Frontend-only configuration for easy deployment
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./client/src/assets"),
    },
  },
  root: "./client",
  build: {
    outDir: "../dist-frontend",
    emptyOutDir: true,
  },
  base: "./", // Important for GitHub Pages
});