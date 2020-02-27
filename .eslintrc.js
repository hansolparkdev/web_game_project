module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style':0,
    'react/jsx-filename-extension':0,
    'no-console': 'off',
    'react/jsx-fragments': 0,
    'radix': 0,
    'no-unused-vars': 0,
    'import/no-cycle': 0,
    'react/prop-types' : 0,
    'react/no-array-index-key': 0,
  },
};
