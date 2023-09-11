const {
    overrides: reactAppOverrides,
  } = require('eslint-config-react-app');
  
  module.exports = {
    ...reactAppOverrides,
    rules: {
      // Add additional rules here
      'no-console': 'off',
    },
  };