/**
 * @file Imports
 * @module pkg-types/Imports
 */

import type ImportsSubpath from './imports-subpath'
import type Target from './target'

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
