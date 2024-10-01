/**
 * @file CPU
 * @module pkg-types/CPU
 */

import type { CPUMap } from '@flex-development/pkg-types'

/**
 * Union of registered CPU architectures.
 *
 * To register new architectures, augment {@linkcode CPUMap}. They will be added
 * to this union automatically.
 */
type CPU = `${'' | '!'}${CPUMap[keyof CPUMap]}`

export type { CPU as default }
