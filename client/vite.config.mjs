import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const mathjaxFullVersion = require("mathjax-full/package.json").version;

export default defineConfig(({ mode }) => ({
  // Components in this project use .js (not .jsx) extensions, but
  // @vitejs/plugin-react only enables Fast Refresh for .jsx/.tsx files
  // under the default automatic JSX runtime. The classic runtime instead
  // checks for a literal `import React`, which every component here has,
  // so this restores Fast Refresh (instead of a full page reload) on edit.
  plugins: [react({ jsxRuntime: "classic" })],
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
        "process.env.NODE_ENV": JSON.stringify(mode),
        PACKAGE_VERSION: JSON.stringify(mathjaxFullVersion),
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      avataaars: path.resolve(__dirname, "src/shims/AvataaarsCompat.jsx"),
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true,
    // Bind mounts (e.g. Docker Desktop on macOS) often miss native fs events;
    // polling fixes HMR but is expensive. Prefer a looser interval in containers.
    watch: {
      usePolling: true,
      interval: Number(process.env.VITE_WATCH_POLL_INTERVAL) || 500,
    },
    hmr: {
      host: "localhost",
      clientPort: 3000,
    },
  },
}));
