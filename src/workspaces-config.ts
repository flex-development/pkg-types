/**
 * @file WorkspacesConfig
 * @module pkg-types/WorkspacesConfig
 */

import type JsonObject from './json-object'

/**
 * Workspaces configuration.
 *
 * @see {@linkcode JsonObject}
 * @see https://classic.yarnpkg.com/docs/workspaces
 * @see https://yarnpkg.com/features/workspaces
 * @see https://github.com/npm/rfcs/blob/main/implemented/0026-workspaces.md
 *
 * @extends {JsonObject}
 */
interface WorkspacesConfig extends JsonObject {
  /**
   * [Glob patterns][minimatch] matching module paths to prevent from being
   * hoisted.
   *
   * [minimatch]: https://github.com/isaacs/minimatch
   *
   * @see https://classic.yarnpkg.com/blog/2018/02/15/nohoist
   */
  nohoist?: string[] | null

  /**
   * [Glob patterns][minimatch] matching all directories that should become
   * workspaces.
   *
   * [minimatch]: https://github.com/isaacs/minimatch
   */
  packages?: string[] | null
}

export type { WorkspacesConfig as default }
