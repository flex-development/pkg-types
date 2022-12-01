/**
 * @file Type Definitions - Imports
 * @module pkg-types/types/Imports
 */

import type ExportConditions from './export-conditions'
import type ImportsKey from './imports-key'

/**
 * Private mappings that only apply to import specifiers from within a
 * package.
 *
 * @see https://nodejs.org/api/packages.html#subpath-imports
 */
type Imports = { [key: ImportsKey]: ExportConditions | string }

export type { Imports as default }
