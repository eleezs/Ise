module.exports = {
  parser: "@typescript-eslint/parser",
  "env": {
      "node": true,
      "es6": true
  },
  "rules": {
      "no-use-before-define": "error",
      "no-redeclare": "error",
      "no-unused-vars": "off",
      "no-async-promise-executor": "off",
      "no-extra-semi": "off",
      "no-prototype-builtins": "off"
  },
  "extends": ["eslint:recommended"]
};