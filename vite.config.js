import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Use this cmd to install tailwind css : npm install -D tailwindcss @tailwindcss/vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
