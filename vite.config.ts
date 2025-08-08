import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
    server: {
        port: 2025,
        strictPort: true
    },
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()]
});
