import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const mathjaxFullVersion = require("mathjax-full/package.json").version;

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Used by Rollup during `vite build` (and app source).
  define: {
    PACKAGE_VERSION: JSON.stringify(mathjaxFullVersion),
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      // prepareEsbuildOptimizerRun sets `define` only for NODE_ENV; user
      // `esbuildOptions` is spread after and replaces it entirely, so both
      // must be set. Without PACKAGE_VERSION, mathjax-full falls through to
      // eval('require') in the browser pre-bundle.
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? mode),
        PACKAGE_VERSION: JSON.stringify(mathjaxFullVersion),
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true,
  },
}));
