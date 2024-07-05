import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{host:"192.168.1.21",port:80},
  resolve: {
    alias: {
      "@component": path.resolve(__dirname, "src/component"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
      "src/config": path.resolve(__dirname, "src/config"),
      "src/shared": path.resolve(__dirname, "src/shared"),
      "src/view": path.resolve(__dirname, "src/view"),
      "src/modules": path.resolve(__dirname, "src/modules"),
      "src/security": path.resolve(__dirname, "src/security"),
      "@i18n": path.relative(__dirname, "../../i18n"),
    },
  },
  // server: {
  //   host: "192.168.90.76",
  // },
});
