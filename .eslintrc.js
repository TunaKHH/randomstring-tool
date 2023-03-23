module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
  },
};
