/**
 * @file Interfaces - WorkspacesConfig
 * @module pkg-types/interfaces/WorkspacesConfig
 */

/**
 * Yarn Workspaces configuration.
 *
 * @see https://classic.yarnpkg.com/docs/workspaces
 * @see https://yarnpkg.com/features/workspaces
 */
interface WorkspacesConfig {
  /**
   * [Glob patterns][1] matching module paths to prevent from being hoisted.
   *
   * [1]: https://github.com/isaacs/minimatch
   *
   * @see https://classic.yarnpkg.com/blog/2018/02/15/nohoist
   */
  nohoist?: string[]

  /**
   * [Glob patterns][1] matching all directories that should become workspaces.
   *
   * [1]: https://github.com/isaacs/minimatch
   */
  packages?: string[]
}

export type { WorkspacesConfig as default }
