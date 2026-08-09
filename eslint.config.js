import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier: eslintPluginPrettier },
    extends: ["js/recommended", eslintConfigPrettier],
    languageOptions: { globals: globals.browser },
  },
  {
    // ignorePatterns: ["dist/", "node_modules/"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "error",
      eqeqeq: "error",
      "no-undef": "error",
      semi: "error",
      "no-inline-comments": "error",
      "no-var": "error",
    },
  },
]);
