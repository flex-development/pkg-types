/**
 * @file PackageManager
 * @module pkg-types/PackageManager
 */

import type PackageManagerMap from './package-manager-map'

/**
 * Union of registered package managers.
 *
 * To register new package managers, augment {@linkcode PackageManagerMap}. They
 * will be added to this union automatically.
 */
type PackageManager = PackageManagerMap[keyof PackageManagerMap]

export type { PackageManager as default }
