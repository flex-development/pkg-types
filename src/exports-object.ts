/**
 * @file ExportsObject
 * @module pkg-types/ExportsObject
 */

import type ExportConditions from './export-conditions'
import type SubpathExports from './subpath-exports'

/**
 * Package exports object.
 *
 * @see {@linkcode ExportConditions}
 * @see {@linkcode SubpathExports}
 * @see https://nodejs.org/api/packages.html#exports
 */
type ExportsObject = ExportConditions | SubpathExports

export type { ExportsObject as default }
