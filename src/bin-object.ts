/**
 * @file BinObject
 * @module pkg-types/BinObject
 */

/**
 * Executable files to install into `PATH`.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
 * @see https://yarnpkg.com/configuration/manifest#bin
 */
interface BinObject {
  [command: string]: string
}

export type { BinObject as default }
