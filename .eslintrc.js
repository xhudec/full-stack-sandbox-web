'use strict'

module.exports = {
  extends: [
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/optional',
    '@strv/eslint-config-typescript/style',

    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-react/style',

    '@strv/eslint-config-node/v10',
    '@strv/eslint-config-node/optional',
    '@strv/eslint-config-node/style',
  ],
  plugins: ['@typescript-eslint', 'import', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    /**
     * ! FIXME: because ESLint can't detect newly created modules for some reason
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/864#issuecomment-538167956
     */
    createDefaultProgram: true,
  },
  env: {
    'jest/globals': true,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // conflicts with personal preference or guidelines
    'padding-line-between-statements': 'off',
    'arrow-body-style': 'off',
    'import/group-exports': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    'consistent-return': 'off',

    // prettier is responsible for all code formatting
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'no-extra-parens': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',

    // typescript...
    'react/prop-types': 'off',

    // ! FIXME: strange behavior
    'import/no-unused-modules': 'off',
  },
}
