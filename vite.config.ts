import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ShopHub/",
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 3000,
    open: true,
  },
});
