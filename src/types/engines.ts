/**
 * @file Type Aliases - Engines
 * @module pkg-types/types/Engines
 */

import type { ExactOptionalPropertyTypes } from '@flex-development/tutils'
import type Engine from './engine'

/**
 * Engines a package runs on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 * @see https://classic.yarnpkg.com/en/docs/package-json#toc-engines
 */
type Engines = ExactOptionalPropertyTypes<{ [engine in Engine]?: string }>

export type { Engines as default }
