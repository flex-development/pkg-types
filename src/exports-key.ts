/**
 * @file ExportsKey
 * @module pkg-types/ExportsKey
 */

import type { Condition, ExportsSubpath } from '@flex-development/pkg-types'

/**
 * An `exports` object key.
 *
 * @see {@linkcode Condition}
 * @see {@linkcode ExportsSubpath}
 * @see https://nodejs.org/api/packages.html#package-entry-points
 */
type ExportsKey = Condition | ExportsSubpath

export type { ExportsKey as default }
