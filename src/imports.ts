/**
 * @file Imports
 * @module pkg-types/Imports
 */

import type ImportConditions from './import-conditions'
import type ImportsKey from './imports-key'

/**
 * Mappings that only apply to import specifiers from within a package.
 *
 * @see {@linkcode ImportConditions}
 * @see {@linkcode ImportsKey}
 * @see https://nodejs.org/api/packages.html#subpath-imports
 */
type Imports = { [key in ImportsKey]: ImportConditions | string }

export type { Imports as default }
