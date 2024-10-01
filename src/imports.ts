/**
 * @file Imports
 * @module pkg-types/Imports
 */

import type { ImportsSubpath, Target } from '@flex-development/pkg-types'

/**
 * Mappings that only apply to import specifiers from within a package.
 *
 * @see {@linkcode ImportsSubpath}
 * @see {@linkcode Target}
 * @see https://nodejs.org/api/packages.html#subpath-imports
 */
interface Imports {
  [subpath: string]: Target
  [subpath: ImportsSubpath]: Target
}

export type { Imports as default }
