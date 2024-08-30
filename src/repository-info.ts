/**
 * @file RepositoryInfo
 * @module pkg-types/RepositoryInfo
 */

import type JsonObject from './json-object'
import type RepositoryType from './repository-type'

/**
 * Source code location.
 *
 * @see {@linkcode JsonObject}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
 *
 * @extends {JsonObject}
 */
interface RepositoryInfo extends JsonObject {
  /**
   * Relative path to `package.json` if placed in non-root directory.
   *
   * @see https://github.com/npm/rfcs/blob/main/implemented/0010-monorepo-subdirectory-declaration.md
   */
  directory?: string | null

  /**
   * Repository type.
   *
   * @see {@linkcode RepositoryType}
   */
  type: RepositoryType

  /**
   * Repository URL.
   *
   * > 👉 **Note**: Should be a publicly available, perhaps read-only, URL that
   * > can be handed directly to a version-control system without modification.
   */
  url: string
}

export type { RepositoryInfo as default }
