module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/jsx-runtime'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
