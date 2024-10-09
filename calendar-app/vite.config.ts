import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "react-router": ["react-router", "react-router-dom"],
        },
      },
    },
  },
});
