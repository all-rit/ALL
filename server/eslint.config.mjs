import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    prettierConfig,
{
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],

    plugins: {
        js,
        prettier
    },

    extends: [
        "js/recommended"
    ],

    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        globals: {
            ...globals.node,
        },
    },

    rules: {
        "no-unused-vars": [
            "error", 
            { 
                argsIgnorePattern: "^_" 
            }
        ],
    }
}, {
    files: ["**/*.spec.js", "**/*.spec.jsx", "**/*.test.js"],

    plugins: {
        jest
    },

    languageOptions: {
        globals: jest.environments.globals.globals
    },
}]);