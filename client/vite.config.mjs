import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ENV_KEYS = new Set([
  "PUBLIC_URL",
  "API_URL",
  "REACT_APP_GA_TRACKING_ID",
]);

function collectEnv(mode) {
  const loaded = loadEnv(mode, __dirname, "");
  const out = {};
  for (const [key, value] of Object.entries(loaded)) {
    if (key.startsWith("REACT_APP_") || ENV_KEYS.has(key)) {
      out[key] = value;
    }
  }
  for (const key of Object.keys(process.env)) {
    if (key.startsWith("REACT_APP_") || ENV_KEYS.has(key)) {
      const v = process.env[key];
      if (v !== undefined) {
        out[key] = v;
      }
    }
  }
  return out;
}

function processEnvDefine(mode) {
  const env = collectEnv(mode);
  const defines = {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "production" ? "production" : "development",
    ),
    "process.env.PUBLIC_URL": JSON.stringify(env.PUBLIC_URL ?? ""),
  };
  for (const [key, value] of Object.entries(env)) {
    if (key === "PUBLIC_URL") {
      continue;
    }
    defines[`process.env.${key}`] = JSON.stringify(value ?? "");
  }
  return defines;
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
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
  define: processEnvDefine(mode),
  server: {
    port: 3000,
    host: true,
  },
}));
