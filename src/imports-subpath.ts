/**
 * @file ImportsSubpath
 * @module pkg-types/ImportsSubpath
 */

/**
 * A subpath `imports` object key.
 *
 * @see https://nodejs.org/api/packages.html#subpath-imports
 */
type ImportsSubpath = `#${string}`

export type { ImportsSubpath as default }
