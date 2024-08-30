/**
 * @file DevDependencies
 * @module pkg-types/DevDependencies
 */

/**
 * Dependencies used during package development only.
 *
 * These dependencies are not required for the package to function properly.
 */
interface DevDependencies {
  [dependency: string]: string
}

export type { DevDependencies as default }
