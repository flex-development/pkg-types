/**
 * @file TargetList
 * @module pkg-types/TargetList
 */

import type { ConditionalTargets } from '@flex-development/pkg-types'

/**
 * List of package targets.
 *
 * @see {@linkcode ConditionalTargets}
 * @see https://nodejs.org/api/packages.html#package-entry-points
 */
type TargetList = (ConditionalTargets | TargetList | string | null)[]

export type { TargetList as default }
