/**
 * @file BrowserObject
 * @module pkg-types/BrowserObject
 */

/**
 * Map of hints to JavaScript bundlers or component tools when packaging modules
 * for client side use.
 *
 * @see https://github.com/defunctzombie/package-browser-field-spec
 */
interface BrowserObject {
  [key: string]: string | false
}

export type { BrowserObject as default }
