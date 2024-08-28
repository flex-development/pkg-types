/**
 * @file Type Aliases - Type
 * @module pkg-types/types/Type
 */

/**
 * Module format used by Node.js for all `.js` files that have a `package.json`
 * file as their nearest parent.
 *
 * @see https://nodejs.org/api/packages.html#type
 * @see https://nodejs.org/api/esm.html#esm_package_json_type_field
 */
type Type = 'commonjs' | 'module'

export type { Type as default }
