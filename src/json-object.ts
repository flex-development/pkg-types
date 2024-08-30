/**
 * @file JsonObject
 * @module pkg-types/JsonObject
 */

import type JsonValue from './json-value'

/**
 * A [JSON][] object.
 *
 * This type can be used to enforce input values to be JSON-compatible or as a
 * super-type to be extended from.
 *
 * [json]: https://restfulapi.net/json-data-types
 *
 * @see {@linkcode JsonValue}
 */
interface JsonObject {
  [key: string]: JsonValue
}

export type { JsonObject as default }
