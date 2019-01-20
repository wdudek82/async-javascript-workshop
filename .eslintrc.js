module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  extends: ["airbnb-base", "plugin:import/errors", "plugin:import/warnings"],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-restricted-syntax": [0, "ForInStatement", "ForOfStatement"],
    "arrow-body-style": 0,
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "arrow-parens": ["error", "always"],
    "space-before-function-paren": 0,
    "function-paren-newline": ["error", "consistent"],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
        caughtErrors: "all",
      },
    ],
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-underscore-dangle": 0,
    "object-curly-newline": ["error", { consistent: true }],
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "no-confusing-arrow": 0,
  },
};
