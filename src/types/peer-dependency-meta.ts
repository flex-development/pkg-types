/**
 * @file Type Aliases - PeerDependencyMeta
 * @module pkg-types/types/PeerDependencyMeta
 */

/**
 * Peer dependency metadata.
 *
 * @see https://yarnpkg.com/configuration/manifest#peerDependenciesMeta
 */
type PeerDependencyMeta = {
  /**
   * Have package manager mark dependency as optional.
   *
   * A package consumer omitting the dependency will not raise an error.
   */
  optional?: boolean
}

export type { PeerDependencyMeta as default }
