/**
 * @file Interfaces - BugsObject
 * @module pkg-types/interfaces/BugsObject
 */

/**
 * Object containing the URL to the package's issue tracker and/or the email
 * address to which issues should be reported.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
 */
interface BugsObject {
  /**
   * Email address issues should be reported to.
   */
  email?: string

  /**
   * Issue tracker URL.
   */
  url?: string
}

export type { BugsObject as default }
