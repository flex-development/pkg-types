/**
 * @file SemanticVersion
 * @module pkg-types/SemanticVersion
 */

import type { EmptyString } from '@flex-development/tutils'

/**
 * [Semantic version][1] string.
 *
 * [1]: https://semver.org
 *
 * @see https://semver.org
 * @see https://regex101.com/r/vkijKf/1
 */
type SemanticVersion = `${number}.${number}.${number}${
  | EmptyString
  | `-${number | `${string}${EmptyString | `.${number}`}`}`
  | `+${number | string}`}`

export type { SemanticVersion as default }
