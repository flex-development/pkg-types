/**
 * @file ImportConditions
 * @module pkg-types/ImportConditions
 */

import type Condition from './condition'

/**
 * Import conditions map.
 *
 * @see {@linkcode Condition}
 * @see https://nodejs.org/api/packages.html#subpath-imports
 */
type ImportConditions = { [condition in Condition]?: string | null }

export type { ImportConditions as default }
