/**
 * @file Interfaces - FundingObject
 * @module pkg-types/interfaces/FundingObject
 */

import type { FundingType } from '#src/types'

/**
 * Object containing information about how to support a package monetarily.
 *
 * @see https://docs.npmjs.com/cli/configuring-npm/package-json#funding
 */
interface FundingObject {
  /**
   * Package funding type.
   */
  type?: FundingType

  /**
   * URL to funding account for package.
   */
  url: string
}

export type { FundingObject as default }
