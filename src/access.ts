/**
 * @file Access
 * @module pkg-types/Access
 */

/**
 * Package access levels.
 *
 * @see https://docs.npmjs.com/cli/v9/using-npm/config#access
 * @see https://yarnpkg.com/configuration/manifest#publishConfig.access
 */
type Access = 'public' | 'restricted'

export type { Access as default }
