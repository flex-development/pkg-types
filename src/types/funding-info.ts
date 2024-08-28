/**
 * @file Type Aliases - FundingInfo
 * @module pkg-types/types/FundingInfo
 */

import type FundingType from './funding-type'

/**
 * Object containing information about how to support a package monetarily.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
 */
type FundingInfo = {
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
