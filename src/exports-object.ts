/**
 * @file ExportsObject
 * @module pkg-types/ExportsObject
 */

import type {
  ConditionalTargets,
  SubpathExports
} from '@flex-development/pkg-types'

/**
 * Package exports object.
 *
 * @see {@linkcode ConditionalTargets}
 * @see {@linkcode SubpathExports}
 * @see https://nodejs.org/api/packages.html#exports
 */
type ExportsObject = ConditionalTargets | SubpathExports

export type { ExportsObject as default }
