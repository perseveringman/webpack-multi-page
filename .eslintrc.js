module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      "classes": true
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-duplicates': 0, // 解决preact import的error
    'import/no-extraneous-dependencies': 0, // 解决preact import的error
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }], // 在js里写jsx
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
