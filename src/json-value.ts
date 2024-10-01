/**
 * @file JsonValue
 * @module pkg-types/JsonValue
 */

import type {
  JsonArray,
  JsonObject,
  JsonPrimitive
} from '@flex-development/pkg-types'

/**
 * [JSON][] data types.
 *
 * [json]: https://restfulapi.net/json-data-types
 */
type JsonValue = JsonArray | JsonObject | JsonPrimitive

export type { JsonValue as default }
