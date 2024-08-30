/**
 * @file PeerDependencies
 * @module pkg-types/PeerDependencies
 */

/**
 * Dependencies that should be installed by package user or via another
 * dependency.
 */
interface PeerDependencies {
  [dependency: string]: string
}

export type { PeerDependencies as default }
