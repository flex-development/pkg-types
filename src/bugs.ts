/**
 * @file Bugs
 * @module pkg-types/Bugs
 */

import type { JsonObject } from '@flex-development/pkg-types'

/**
 * Issue tracker info.
 *
 * @see {@linkcode JsonObject}
 * @see https://classic.yarnpkg.com/en/docs/package-json#toc-bugs
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
 *
 * @extends {JsonObject}
 */
interface Bugs extends JsonObject {
  /**
   * Email address issues should be reported to.
   */
  email?: string | null

  /**
   * Issue tracker URL.
   */
  url?: string | null
}

export type { Bugs as default }
