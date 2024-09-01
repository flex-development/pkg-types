/**
 * @file ExportsKey
 * @module pkg-types/ExportsKey
 */

import type Condition from './condition'
import type ExportsSubpath from './exports-subpath'

/**
 * An `exports` object key.
 *
 * @see {@linkcode Condition}
 * @see {@linkcode ExportsSubpath}
 * @see https://nodejs.org/api/packages.html#package-entry-points
 */
type ExportsKey = Condition | ExportsSubpath

export type { ExportsKey as default }
