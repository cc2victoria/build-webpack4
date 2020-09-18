module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  globals: {
    describe: true,
    it: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 0,
  },
};
