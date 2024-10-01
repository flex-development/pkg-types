/**
 * @file Target
 * @module pkg-types/Target
 */

import type {
  ConditionalTargets,
  TargetList
} from '@flex-development/pkg-types'

/**
 * Union of package export and import targets.
 *
 * @see {@linkcode ConditionalTargets}
 * @see {@linkcode TargetList}
 * @see https://nodejs.org/api/packages.html
 */
type Target = ConditionalTargets | TargetList | string | null

export type { Target as default }
