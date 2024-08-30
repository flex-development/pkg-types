/**
 * @file PackageManagerMap
 * @module pkg-types/PackageManagerMap
 */

/**
 * Registry of package managers.
 *
 * @see https://nodejs.org/api/corepack.html#supported-package-managers
 */
interface PackageManagerMap {
  npm: 'npm'
  pnpm: 'pnpm'
  pnpx: 'pnpx'
  yarn: 'yarn'
  yarnpkg: 'yarnpkg'
}

export type { PackageManagerMap as default }
