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
    // @emotion/react and @emotion/styled are only reachable through
    // lazily-loaded routes (e.g. the DragIndicator icon pulled in by
    // lab13's ConfidenceRanking/DraggableCard). Left out of this list,
    // Vite only discovers them once that route is first visited and
    // re-optimizes them separately from the copy already cached by the
    // browser from the initial scan, producing two module instances
    // ("You are loading @emotion/react when it is already loaded").
    // Including them here forces both into the same initial pre-bundle.
    include: ["@emotion/react", "@emotion/styled"],
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
