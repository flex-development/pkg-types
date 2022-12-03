/**
 * @file Type Definitions - LicenseObject
 * @module pkg-types/types/LicenseObject
 */

/**
 * Object representing a package license.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
 */
type LicenseObject = {
  /**
   * [SPDX identifier][1].
   *
   * [1]: https://spdx.org/licenses/
   */
  type?: string

  /**
   * License URL.
   */
  url?: string
}

export type { LicenseObject as default }
