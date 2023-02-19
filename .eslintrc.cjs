/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['scratch.ts'],
      rules: {
        'unicorn/prefer-json-parse-buffer': 0
      }
    },
    {
      files: ['src/interfaces/dependency-map.ts', 'src/types/imports.ts'],
      rules: {
        '@typescript-eslint/consistent-indexed-object-style': 0
      }
    },
    {
      files: ['src/types/__tests__/types-versions.spec-d.ts'],
      rules: {
        'sort-keys': 0
      }
    }
  ],
  root: true
}

module.exports = config
