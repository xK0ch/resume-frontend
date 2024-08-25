module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@ewerk/eslint-config',
    '@ewerk/eslint-config/typescript',
    '@ewerk/eslint-config/angular',
  ],
  rules: {
    'no-new-native-nonconstructor': 'off',
  },
};
