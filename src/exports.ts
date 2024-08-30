/**
 * @file Exports
 * @module pkg-types/Exports
 */

import type ExportsList from './exports-list'
import type ExportsObject from './exports-object'

/**
 * Package exports.
 *
 * @see {@linkcode ExportsList}
 * @see {@linkcode ExportsObject}
 * @see https://nodejs.org/api/packages.html#exports
 */
type Exports = ExportsList | ExportsObject | string | null

export type { Exports as default }
