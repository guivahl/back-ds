module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
  },
};
