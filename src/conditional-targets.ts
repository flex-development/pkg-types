/**
 * @file ConditionalTargets
 * @module pkg-types/ConditionalTargets
 */

import type Condition from './condition'
import type Target from './target'

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
