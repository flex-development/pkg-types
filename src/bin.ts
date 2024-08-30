/**
 * @file Bin
 * @module pkg-types/Bin
 */

import type BinObject from './bin-object'

/**
 * Executable files to install into `PATH`.
 *
 * @see {@linkcode BinObject}
 */
type Bin = BinObject | string

export type { Bin as default }
