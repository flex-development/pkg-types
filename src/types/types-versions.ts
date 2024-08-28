/**
 * @file Type Aliases - TypesVersions
 * @module pkg-types/types/TypesVersions
 */

import type { DependencyMap } from '#src/interfaces'

/**
 * TypeScript version selection map.
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions
 */
type TypesVersions = DependencyMap<{ [file in string]: string[] }>

export type { TypesVersions as default }
