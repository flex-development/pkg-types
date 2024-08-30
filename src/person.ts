/**
 * @file Person
 * @module pkg-types/Person
 */

import type JsonObject from './json-object'

/**
 * Someone who has been involved in creating or maintaining a package.
 *
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface Person extends JsonObject {
  /**
   * Email address of person.
   */
  email?: string | null

  /**
   * Name of person.
   */
  name: string

  /**
   * URL for person.
   */
  url?: string | null
}

export type { Person as default }
