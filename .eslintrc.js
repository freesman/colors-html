module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './components/common'],
          ['pages', './components/pages'],
          ['providers', './components/providers'],
          ['constants', './constants'],
          ['utils', './utils'],
          ['styles', './styles'],
          ['public', './public'],
          ['images', './public/images'],
          ['hooks', './hooks'],
          ['api', './pages/api']
        ],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'func-names': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'function-paren-newline': 'off',
    'no-nested-ternary': 'off',
    'import/first': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/no-danger': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/function-component-definition': 'off',
    'consistent-return': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: {
    RUNTIME_ENV: true,
  },
};
