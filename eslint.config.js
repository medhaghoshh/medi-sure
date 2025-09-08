// Import ESLint and plugins
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignore build output
  { ignores: ["dist"] },

  {
    // Extend recommended configs
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Apply rules only to TypeScript files
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020, // Enable modern JS features
      globals: globals.browser, // Browser global variables
    },

    // Enable React-specific plugins
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    // Custom rules
    rules: {
      ...reactHooks.configs.recommended.rules, // React hooks rules
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }], // React Fast Refresh
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars rule
    },
  },
);
