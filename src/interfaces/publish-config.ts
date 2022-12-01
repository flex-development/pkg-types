/**
 * @file Interfaces - PublishConfig
 * @module pkg-types/interfaces/PublishConfig
 */

import type { Access, Bin, Registry } from '#src/types'
import type { JSONValue } from '@flex-development/tutils'

/**
 * Set of configuration values to use when a package is published.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 * @see https://yarnpkg.com/configuration/manifest#publishConfig
 */
interface PublishConfig {
  [key: string]: JSONValue | undefined

  /**
   * Package access level.
   */
  access?: Access

  /**
   * Replacement for top-level `bin` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   */
  bin?: Bin

  /**
   * Additional files that must have the executable flag (`+x`) set even if they
   * aren't directly accessible through the `bin` field.
   */
  executableFiles?: string[]

  /**
   * Replacement for top-level `main` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   */
  main?: string

  /**
   * Replacement for top-level `module` field.
   *
   * **Note**: Only modifies the manifest stored in the package tarball, not the
   * real `package.json` file.
   */
  module?: string

  /**
   * Package registry URL.
   *
   * @default 'https://registry.npmjs.org/'
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
