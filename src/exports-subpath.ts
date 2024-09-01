/**
 * @file ExportsSubpath
 * @module pkg-types/ExportsSubpath
 */

/**
 * A subpath `exports` object key.
 *
 * @see https://nodejs.org/api/packages.html#subpath-exports
 */
type ExportsSubpath = '.' | `./${string}`

export type { ExportsSubpath as default }
