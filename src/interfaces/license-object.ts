/**
 * @file Interfaces - LicenseObject
 * @module pkg-types/interfaces/LicenseObject
 */

/**
 * Object representing a package license.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
 */
interface LicenseObject {
  /**
   * License type.
   */
  type?: string

  /**
   * License URL.
   */
  url?: string
}

export type { LicenseObject as default }
