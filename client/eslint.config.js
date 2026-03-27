import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  // 1. Global Ignores (Replaces .eslintignore)
  {
    ignores: ["dist", "build", "node_modules"],
  },

  // 2. Base Configuration for all JS/JSX files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    // This merges the "extends" logic into the config object
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "React",
        },
      ],
      "indent": "off",
    },
  },

  // 3. Jest Specific Configuration (Replaces "overrides")
  {
    files: ["**/*.{spec,test}.{js,jsx}"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },

  // 4. Prettier (Always last to override conflicting rules)
  prettierPlugin,
  {
    rules: {
      "prettier/prettier": [
        "warn",
        {
          "endOfLine": "auto",
        },
      ],
    },
  },
];