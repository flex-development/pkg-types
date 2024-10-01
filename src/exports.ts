/**
 * @file Exports
 * @module pkg-types/Exports
 */

import type { SubpathExports, Target } from '@flex-development/pkg-types'

/**
 * Package exports.
 *
 * @see {@linkcode SubpathExports}
 * @see {@linkcode Target}
 * @see https://nodejs.org/api/packages.html#package-entry-points
 */
type Exports = SubpathExports | Target

export type { Exports as default }
