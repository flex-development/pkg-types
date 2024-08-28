/**
 * @file Type Aliases - ExportCondition
 * @module pkg-types/types/ExportCondition
 */

import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Conditions indicating how to resolve a package entry point.
 *
 * @see https://nodejs.org/api/packages.html#conditional-exports
 */
type ExportCondition = LiteralUnion<
  | 'browser'
  | 'default'
  | 'deno'
  | 'development'
  | 'electron'
  | 'import'
  | 'node-addons'
  | 'node'
  | 'production'
  | 'react-native'
  | 'require'
  | 'types',
  string
>

export type { ExportCondition as default }
