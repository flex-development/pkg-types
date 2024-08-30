/**
 * @file ExportConditions
 * @module pkg-types/ExportConditions
 */

import type Condition from './condition'
import type Exports from './exports'

/**
 * [Export conditions][export-conditions] map.
 *
 * [export-conditions]: https://nodejs.org/api/packages.html#conditional-exports
 *
 * @see {@linkcode Condition}
 * @see {@linkcode Exports}
 */
type ExportConditions = { [condition in Condition]?: Exports }

export type { ExportConditions as default }
