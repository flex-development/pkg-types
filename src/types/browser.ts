/**
 * @file Type Aliases - Browser
 * @module pkg-types/types/Browser
 */

import type { DependencyMap } from '#src/interfaces'

/**
 * Hint to JavaScript bundlers or component tools when packaging modules for
 * client side use.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
 * @see https://yarnpkg.com/configuration/manifest#publishConfig.browser
 */
type Browser = DependencyMap<string | false> | string

export type { Browser as default }
