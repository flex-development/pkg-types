/**
 * @file Type Definitions - TypesVersions
 * @module pkg-types/types/TypesVersions
 */

/**
 * TypeScript version selection map.
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions
 */
type TypesVersions = Partial<Record<string, Partial<Record<string, string[]>>>>

export type { TypesVersions as default }
