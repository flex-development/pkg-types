/**
 * @file Type Definitions - Registry
 * @module pkg-types/types/Registry
 */

import type { EmptyString } from '@flex-development/tutils'

/**
 * Package registry URL.
 *
 * @see https://yarnpkg.com/configuration/manifest#publishConfig.registry
 */
type Registry = `http${EmptyString | 's'}://${string}`

export type { Registry as default }
