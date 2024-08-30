/**
 * @file Condition
 * @module pkg-types/Condition
 */

import type ConditionMap from './condition-map'

/**
 * Union of registered export and import conditions.
 *
 * To register new conditions, augment {@linkcode ConditionMap}. They will be
 * added to this union automatically.
 */
type Condition = ConditionMap[keyof ConditionMap]

export type { Condition as default }
