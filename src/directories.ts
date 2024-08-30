/**
 * @file Directories
 * @module pkg-types/Directories
 */

/**
 * Package structure.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 * @see https://classic.yarnpkg.com/en/docs/package-json#toc-directories
 * @see https://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout
 */
interface Directories {
  [directory: string]: string | null

  /**
   * Relative path to directory containing executable files.
   */
  bin?: string | null

  /**
   * Relative path to directory containing documentation.
   */
  doc?: string | null

  /**
   * Relative path to directory containing package usage examples.
   */
  example?: string | null

  /**
   * Relative path to directory containing distribution code.
   */
  lib?: string | null

  /**
   * Relative path to directory containing man pages.
   */
  man?: string | null

  /**
   * Relative path to directory containing source code.
   */
  src?: string | null

  /**
   * Relative path to directory containing test files.
   */
  test?: string | null
}

export type { Directories as default }
