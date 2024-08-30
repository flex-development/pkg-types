/**
 * @file SubpathExports
 * @module pkg-types/SubpathExports
 */

import type Exports from './exports'
import type JsonObject from './json-object'

/**
 * [Subpath exports][subpath-exports] map.
 *
 * [subpath-exports]: https://nodejs.org/api/packages.html#subpath-exports
 *
 * @see {@linkcode Exports}
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface SubpathExports extends JsonObject {
  [subpath: `./${string}`]: Exports
  '.'?: Exports
  './package.json'?: Exports
}

export type { SubpathExports as default }
