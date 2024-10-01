/**
 * @file PublishConfig
 * @module pkg-types/PublishConfig
 */

import type {
  Access,
  Bin,
  Browser,
  JsonObject
} from '@flex-development/pkg-types'

/**
 * Configuration values to use when a package is published.
 *
 * @see {@linkcode JsonObject}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 * @see https://yarnpkg.com/configuration/manifest#publishConfig
 *
 * @extends {JsonObject}
 */
interface PublishConfig extends JsonObject {
  /**
   * Package access level.
   *
   * @see {@linkcode Access}
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.access
   */
  access?: Access | null

  /**
   * Replacement for top-level `bin` field, used in the published tarball over
   * the main one.
   *
   * @see {@linkcode Bin}
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.bin
   */
  bin?: Bin | null

  /**
   * Replacement for top-level `browser` field when using yarn, or the browser
   * that is called by `npm` commands to open websites.
   *
   * @see {@linkcode Browser}
   * @see https://docs.npmjs.com/cli/v9/using-npm/config#browser
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.browser
   */
  browser?: Browser | boolean | null

  /**
   * Files that must be marked as executable (`+x`) in the published tarball.
   *
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.executableFiles
   */
  executableFiles?: string[] | null

  /**
   * Replacement for top-level `main` field, used in the published tarball over
   * the main one.
   *
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.main
   */
  main?: string | null

  /**
   * Replacement for top-level `module` field, used in the published tarball
   * over the main one.
   *
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.module
   */
  module?: string | null

  /**
   * Package registry URL.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/config#registry
   * @see https://yarnpkg.com/configuration/manifest#publishConfig.registry
   */
  registry?: string | null

  /**
   * Distribution tag.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/config#tag
   */
  tag?: string | null
}

export type { PublishConfig as default }
