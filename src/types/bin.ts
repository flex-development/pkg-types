/**
 * @file Type Definitions - Bin
 * @module pkg-types/types/Bin
 */

import type DependencyMap from './dependency-map'

/**
 * Executable files to install into `PATH`.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
 * @see https://yarnpkg.com/configuration/manifest#bin
 */
type Bin = DependencyMap<string> | string

export type { Bin as default }
