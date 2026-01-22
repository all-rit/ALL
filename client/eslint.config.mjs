import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    prettierConfig,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'], 
{
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],

    plugins: {
        js,
        react,
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
            ...globals.browser,
            ...globals.node,
        },
    },

    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            fragment: "Fragment",
            version: "detect",
            defaultVersion: "18.2.0", 
            flowVersion: "0.53"
        },
    },

    rules: {
        "no-unused-vars": [
            "error", 
            { 
                varsIgnorePattern: "React" 
            }
        ]
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