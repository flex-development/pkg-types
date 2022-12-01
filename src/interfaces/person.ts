/**
 * @file Interfaces - Person
 * @module pkg-types/interfaces/Person
 */

/**
 * Someone who has been involved in creating or maintaining a package.
 */
interface Person {
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
