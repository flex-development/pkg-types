/**
 * @file PeerDependenciesMeta
 * @module pkg-types/PeerDependenciesMeta
 */

import type { PeerDependencyMetadata } from '@flex-development/pkg-types'

/**
 * Map, where each key is a peer dependency, and each value is metadata for the
 * dependency.
 *
 * @see {@linkcode PeerDependencyMetadata}
 */
interface PeerDependenciesMeta {
  [dependency: string]: PeerDependencyMetadata
}

export type { PeerDependenciesMeta as default }
