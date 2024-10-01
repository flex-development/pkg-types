/**
 * @file Bin
 * @module pkg-types/Bin
 */

import type { BinObject } from '@flex-development/pkg-types'

/**
 * Executable files to install into `PATH`.
 *
 * @see {@linkcode BinObject}
 */
type Bin = BinObject | string

export type { Bin as default }
