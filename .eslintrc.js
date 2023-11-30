module.exports = {
  extends: 'airbnb-base',
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-restricted-syntax': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
