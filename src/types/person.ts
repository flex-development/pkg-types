/**
 * @file Type Definitions - Person
 * @module pkg-types/types/Person
 */

/**
 * Someone who has been involved in creating or maintaining a package.
 */
type Person = {
  /**
   * Person's email address.
   */
  email?: string

  /**
   * Person's name.
   */
  name: string

  /**
   * Person's URL.
   */
  url?: string
}

export type { Person as default }
