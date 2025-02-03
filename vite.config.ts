import fileSystem from "node:fs";

import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import compression from "vite-plugin-compression";
import tsconfigPaths from "vite-tsconfig-paths";

const IS_DEV_ENVIRONMENT = process.env.NODE_ENV?.includes("development");

const developmentConfig = IS_DEV_ENVIRONMENT
  ? ({
      server: {
        host: "0.0.0.0",
        port: 2025,
        https: {
          key: fileSystem.readFileSync("debug_cert/_cert_key.pem"),
          cert: fileSystem.readFileSync("debug_cert/_cert.pem"),
        },
      },
    } satisfies UserConfig)
  : {};

const baseConfig = {
  plugins: [
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: false,
    sourcemap: false,
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler",
      },
    },
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
} satisfies UserConfig;

var combinedConfig = baseConfig;
if (IS_DEV_ENVIRONMENT) {
  Object.assign(combinedConfig, developmentConfig);
}
// https://vitejs.dev/config/
export default defineConfig(combinedConfig);
