/**
 * @file TypesVersions
 * @module pkg-types/TypesVersions
 */

/**
 * TypeScript version selection map.
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions
 */
interface TypesVersions {
  [file: string]: Record<string, string[]>
}

export type { TypesVersions as default }
