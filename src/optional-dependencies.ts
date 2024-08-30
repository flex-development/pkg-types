/**
 * @file OptionalDependencies
 * @module pkg-types/OptionalDependencies
 */

/**
 * Dependencies that are skipped if they fail to install.
 */
interface OptionalDependencies {
  [dependency: string]: string
}

export type { OptionalDependencies as default }
