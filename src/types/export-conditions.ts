/**
 * @file Type Definitions - ExportConditions
 * @module tutils/types/ExportConditions
 */

import type { ExactOptionalPropertyTypes } from '@flex-development/tutils'
import type ExportCondition from './export-condition'
import type Exports from './exports'

/**
 * Object containing conditions indicating how to resolve a package entry point.
 *
 * @see [`ExportCondition`]({@link ./export-condition.ts})
 */
type ExportConditions = ExactOptionalPropertyTypes<{
  [condition in ExportCondition]?: Exports
}>

export type { ExportConditions as default }
