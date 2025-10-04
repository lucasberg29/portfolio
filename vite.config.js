import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), qrcode()],
    base: mode === "development" ? "" : "/portfolio",
    build: {
      outDir: "dist",
    },
    server: {
      host: true,
      open: true,
    },
  };
});
