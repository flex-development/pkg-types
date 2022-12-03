/**
 * @file Interfaces - PublishConfig
 * @module pkg-types/interfaces/PublishConfig
 */

import type { Access, Bin, Browser, Registry } from '#src/types'
import type { JsonObject } from '@flex-development/tutils'

/**
 * Set of configuration values to use when a package is published.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 * @see https://yarnpkg.com/configuration/manifest#publishConfig
 *
 * @extends {JsonObject}
 */
interface PublishConfig extends JsonObject {
  /**
   * Package access level.
   */
  access?: Access

  /**
   * Replacement for top-level `bin` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   *
   * @packageManager yarn
   */
  bin?: Bin

  /**
   * Replacement for top-level `browser` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   *
   * @packageManager yarn
   */
  browser?: Browser

  /**
   * Additional files that must have the executable flag (`+x`) set even if they
   * aren't directly accessible through the `bin` field.
   *
   * @packageManager yarn
   */
  executableFiles?: string[]

  /**
   * Replacement for top-level `main` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   *
   * @packageManager yarn
   */
  main?: string

  /**
   * Replacement for top-level `module` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   *
   * @packageManager yarn
   */
  module?: string

  /**
   * Package registry URL.
   */
  registry?: Registry

  /**
   * Distribution tag.
   *
   * @see https://docs.npmjs.com/cli/commands/npm-dist-tag
   *
   * @default 'latest'
   */
  tag?: string
}

export type { PublishConfig as default }
