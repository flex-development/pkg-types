/**
 * @file ConditionalTargets
 * @module pkg-types/ConditionalTargets
 */

import type { Condition, Target } from '@flex-development/pkg-types'

/**
 * Conditional package targets map.
 *
 * @see {@linkcode Condition}
 * @see {@linkcode Target}
 * @see https://nodejs.org/api/packages.html#conditional-exports
 */
type ConditionalTargets =
  & { [condition: string]: Target }
  & { [condition in Condition]?: Target }

export type { ConditionalTargets as default }
