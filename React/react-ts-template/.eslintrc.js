module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {},
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-params': 'off',
    'no-invalid-this': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off'
  }
};
