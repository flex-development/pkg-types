/**
 * @file Type Definitions - DependencyMeta
 * @module pkg-types/types/DependencyMeta
 */

/**
 * Production and development dependency metadata.
 *
 * @see https://yarnpkg.com/configuration/manifest#dependenciesMeta
 */
type DependencyMeta = {
  /**
   * Skip package build.
   *
   * **Note**: This behavior is reversed when [`enableScripts`][1] is `false`.
   *
   * [1]: https://yarnpkg.com/configuration/yarnrc#enableScripts
   *
   * @see https://yarnpkg.com/configuration/manifest#dependenciesMeta.built
   */
  built?: boolean

  /**
   * Indicate that the dependency's build does not need to succeed in order for
   * the package install to be considered a success.
   *
   * @see https://yarnpkg.com/configuration/manifest#dependenciesMeta.optional
   */
  optional?: boolean

  /**
   * Automatically unplug dependency during install.
   *
   * @see https://yarnpkg.com/configuration/manifest#dependenciesMeta.unplugged
   */
  unplugged?: boolean
}

export type { DependencyMeta as default }
