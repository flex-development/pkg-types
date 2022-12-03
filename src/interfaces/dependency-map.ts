/**
 * @file Interfaces - DependencyMap
 * @module pkg-types/interfaces/DependencyMap
 */

import type { DependencyMeta, PeerDependencyMeta } from '#src/types'
import type { JsonObject } from '@flex-development/tutils'

/**
 * Maps dependency names to version ranges, files, or metadata.
 *
 * @template T - Version range, file, or metadata type
 *
 * @extends {JsonObject}
 */
interface DependencyMap<
  T extends
    | DependencyMeta
    | PeerDependencyMeta
    | Record<string, string[]>
    | string
    | false
> extends JsonObject {
  [dependency: string]: T
}

export type { DependencyMap as default }
