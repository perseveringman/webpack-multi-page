module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
    'import/no-duplicates': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': [2, 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
