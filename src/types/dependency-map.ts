/**
 * @file Type Definitions - DependencyMap
 * @module pkg-types/types/DependencyMap
 */

import type { DependencyMeta, PeerDependencyMeta } from '#src/interfaces'

/**
 * Maps dependency names to version ranges, files, or metadata.
 *
 * @template T - Version range, file, or metadata type
 */
type DependencyMap<
  T extends DependencyMeta | PeerDependencyMeta | string | false
> = Partial<Record<string, T>>

export type { DependencyMap as default }
