/**
 * @file Type Aliases - ImportsKey
 * @module pkg-types/types/ImportsKey
 */

/**
 * [Subpath imports][1] object key.
 *
 * [1]: https://nodejs.org/api/packages.html#subpath-imports
 */
type ImportsKey = `#${string}`

export type { ImportsKey as default }
