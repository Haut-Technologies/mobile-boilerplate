module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:relay/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier",
    "react-hooks",
    "relay",
    "react-native",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        endOfLine: "auto",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/extensions": [
      "error",
      {
        graphql: "always",
        png: "always",
        jpg: "always",
        jpeg: "always",
        json: "always",
        svg: "always",
        "*": "never",
      },
    ],
    "no-shadow": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./*", "../*"],
            message: "No relative imports, use absolute path instead.",
          },
        ],
      },
    ],
    "consistent-return": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "relay/generated-flow-types": "off",
    "global-require": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/style-prop-object": [
      "warn",
      {
        allow: ["StatusBar"],
      },
    ],
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-single-element-style-arrays": "error",
  },
};
