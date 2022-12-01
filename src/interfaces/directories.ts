/**
 * @file Interfaces - Directories
 * @module pkg-types/interfaces/Directories
 */

/**
 * Package structure indicator.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 * @see https://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout
 */
interface Directories {
  [type: string]: string

  /**
   * Relative path to directory containing executable files.
   */
  bin?: string

  /**
   * Relative path to directory containing documentation.
   */
  doc?: string

  /**
   * Relative path to directory containing package usage examples.
   */
  example?: string

  /**
   * Relative path to directory containing distribution code.
   */
  lib?: string

  /**
   * Relative path to directory containing man pages.
   */
  man?: string

  /**
   * Relative path to directory containing source code.
   */
  src?: string

  /**
   * Relative path to directory containing test files.
   */
  test?: string
}

export type { Directories as default }
