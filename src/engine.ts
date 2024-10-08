/**
 * @file Engine
 * @module pkg-types/Engine
 */

import type { EngineMap } from '@flex-development/pkg-types'

/**
 * Union of registered package engines.
 *
 * To register new engines, augment {@linkcode EngineMap}. They will be added to
 * this union automatically.
 */
type Engine = EngineMap[keyof EngineMap]

export type { Engine as default }
