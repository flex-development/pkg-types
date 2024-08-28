/**
 * @file Type Aliases - Engine
 * @module pkg-types/types/Engine
 */

import type { LiteralUnion } from '@flex-development/tutils'

/**
 * Engines a package runs on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
type Engine = LiteralUnion<'node' | 'npm' | 'yarn', string>

export type { Engine as default }
