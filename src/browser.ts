/**
 * @file Type Aliases - Browser
 * @module pkg-types/Browser
 */

import type { BrowserObject } from '@flex-development/pkg-types'

/**
 * Hint to JavaScript bundlers or component tools when packaging modules for
 * client side use.
 *
 * @see {@linkcode BrowserObject}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
 * @see https://yarnpkg.com/configuration/manifest#publishConfig.browser
 */
type Browser = BrowserObject | string

export type { Browser as default }
