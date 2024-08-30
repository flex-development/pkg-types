/**
 * @file JsonValue
 * @module pkg-types/JsonValue
 */

import type JsonArray from './json-array'
import type JsonObject from './json-object'
import type JsonPrimitive from './json-primitive'

/**
 * [JSON][] data types.
 *
 * [json]: https://restfulapi.net/json-data-types
 */
type JsonValue = JsonArray | JsonObject | JsonPrimitive

export type { JsonValue as default }
