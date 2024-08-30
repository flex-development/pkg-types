/**
 * @file ExportsKey
 * @module pkg-types/ExportsKey
 */

import type Condition from './condition'

/**
 * An `exports` object key.
 *
 * @see https://nodejs.org/api/packages.html#subpath-exports
 */
type ExportsKey = '.' | `./${string}` | Condition

export type { ExportsKey as default }
