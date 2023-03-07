module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    globals: {
      JSX: true,
      TSX: true,
      React: true,
    },
    extends: ["plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint","import"],
    rules: {
      "linebreak-style": 0,
      "jsx-a11y/interactive-supports-focus": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "react/require-default-props": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
      "react/jsx-props-no-spreading": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
    },
    overrides: [
      {
        files: ["*.ts"],
        rules: {
          "no-undef": "off",
          "linebreak-style": 0,
        },
      },
    ],
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  };
  