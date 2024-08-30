/**
 * @file PackageType
 * @module pkg-types/PackageType
 */

/**
 * Module format used by Node.js for all `.js` files that have a `package.json`
 * file as their nearest parent.
 *
 * @see https://nodejs.org/api/packages.html#type
 * @see https://nodejs.org/api/esm.html#esm_package_json_type_field
 */
type PackageType = 'commonjs' | 'module'

export type { PackageType as default }
