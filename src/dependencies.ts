/**
 * @file Dependencies
 * @module pkg-types/Dependencies
 */

/**
 * Packages required for the package to function properly.
 */
interface Dependencies {
  [dependency: string]: string
}

export type { Dependencies as default }
