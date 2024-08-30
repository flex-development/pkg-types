/**
 * @file Engines
 * @module pkg-types/Engines
 */

import type Engine from './engine'

/**
 * Engines a package runs on.
 *
 * @see {@linkcode Engine}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 * @see https://classic.yarnpkg.com/en/docs/package-json#toc-engines
 */
type Engines = { [engine in Engine]?: string | null }

export type { Engines as default }
