/**
 * @file Type Aliases - HoistingLimits
 * @module pkg-types/types/HoistingLimits
 */

/**
 * Highest point where packages can be hoisted.
 *
 * @see https://yarnpkg.com/configuration/manifest#installConfig.hoistingLimits
 */
type HoistingLimits = 'dependencies' | 'none' | 'workspaces'

export type { HoistingLimits as default }
