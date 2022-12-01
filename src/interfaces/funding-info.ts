/**
 * @file Interfaces - FundingInfo
 * @module pkg-types/interfaces/FundingInfo
 */

import type { FundingType } from '#src/types'

/**
 * Object containing information about how to support a package monetarily.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
 */
interface FundingInfo {
  /**
   * Package funding type.
   */
  type?: FundingType

  /**
   * URL to funding account for package.
   */
  url: string
}

export type { FundingInfo as default }
