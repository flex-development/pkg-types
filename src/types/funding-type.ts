/**
 * @file Type Aliases - FundingType
 * @module pkg-types/types/FundingType
 */

import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Package funding types.
 *
 * @see https://github.com/npm/rfcs/blob/main/implemented/0017-add-funding-support.md
 */
type FundingType = LiteralUnion<
  | 'corporation'
  | 'foundation'
  | 'github'
  | 'individual'
  | 'opencollective'
  | 'patreon',
  string
>

export type { FundingType as default }
