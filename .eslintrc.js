module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'prettier',
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:@typescript-eslint/recommended'
    'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
    'prettier', // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'arrow-body-style': 0,
    'jsx-a11y/label-has-for': 0,
    'max-lines-per-function': [
      2,
      { max: 320, skipComments: true, skipBlankLines: true }
    ],
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-console': 2,
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    'react/no-this-in-sfc': 0
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
};
