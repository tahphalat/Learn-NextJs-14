import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],

    plugins: {
      js,
      react: pluginReact,
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    extends: [
      "js/recommended",
      "plugin:react/recommended",    // ใช้ recommended react rules
      "plugin:react/jsx-runtime",    // ช่วยให้ใช้ jsx runtime แบบ auto (ไม่ต้อง import React)
    ],

    rules: {
      "react/react-in-jsx-scope": "off", // ปิด error ต้องมี React scope
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    },

    settings: {
      react: {
        version: "detect", // auto detect react version
      },
    },
  },
]);
