const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(
      confusingBrowserGlobals.map((g) => ({
        name: g,
        message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
      })),
    ),

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
  },
};
