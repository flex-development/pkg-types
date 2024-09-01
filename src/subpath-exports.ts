/**
 * @file SubpathExports
 * @module pkg-types/SubpathExports
 */

import type ExportsSubpath from './exports-subpath'
import type Target from './target'

/**
 * Subpath exports map.
 *
 * @see {@linkcode ExportsSubpath}
 * @see {@linkcode Target}
 * @see https://nodejs.org/api/packages.html#subpath-exports
 */
interface SubpathExports {
  [subpath: string]: Target
  [subpath: Exclude<ExportsSubpath, '.'>]: Target
  '.'?: Target
  './package.json'?: Target
}

export type { SubpathExports as default }
