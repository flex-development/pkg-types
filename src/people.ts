/**
 * @file People
 * @module pkg-types/People
 */

import type Person from './person'

/**
 * List of those who have been involved in creating or maintaining a package.
 *
 * @see {@linkcode Person}
 */
type People = (Person | string)[] | readonly (Person | string)[]

export type { People as default }