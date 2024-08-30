/**
 * @file OSMap
 * @module pkg-types/OSMap
 */

/**
 * Registry of operating system platforms.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
 * @see https://yarnpkg.com/configuration/manifest#os
 */
interface OSMap {
  aix: 'aix'
  darwin: 'darwin'
  freebsd: 'freebsd'
  linux: 'linux'
  openbsd: 'openbsd'
  sunos: 'sunos'
  win32: 'win32'
}

export type { OSMap as default }
