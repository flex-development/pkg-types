/**
 * @file Interfaces - Repository
 * @module pkg-types/interfaces/Repository
 */

import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Source code location.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
 */
interface Repository {
  /**
   * Relative path to `package.json` if placed in non-root directory.
   *
   * @see https://github.com/npm/rfcs/blob/main/implemented/0010-monorepo-subdirectory-declaration.md
   */
  directory?: string

  /**
   * Repository type.
   */
  type: LiteralUnion<'git', string>

  /**
   * Repository URL.
   *
   * **Note**: Should be a publicly available, perhaps read-only, URL that can
   * be handed directly to a version-control system without modification.
   */
  url: string
}

export type { Repository as default }
