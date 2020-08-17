module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-duplicates': 0,  // 解决preact import的error
    'import/no-extraneous-dependencies': 0, // 解决preact import的error
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }], // 在js里写jsx
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
