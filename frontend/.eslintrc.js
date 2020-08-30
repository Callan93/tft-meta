module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': 'off',
    'import/order': 1,
    'prefer-const': 'error',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-useless-return': 'off',
    'react/jsx-curly-newline': 'off'
  }
}
