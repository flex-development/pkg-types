/**
 * @file Type Definitions - Exports
 * @module tutils/types/Exports
 */

import type { Nullable, OneOrMany } from '@flex-development/tutils'
import type ExportConditions from './export-conditions'

/**
 * Entry points of a package, optionally with conditions and subpath exports.
 *
 * @see https://nodejs.org/api/packages.html#exports
 */
type Exports = Nullable<OneOrMany<ExportConditions | string>>

export type { Exports as default }
