/**
 * @file JsonArray
 * @module pkg-types/JsonArray
 */

import type JsonValue from './json-value'

/**
 * An array containing [JSON values][json-data-types].
 *
 * [json-data-types]: https://restfulapi.net/json-data-types
 */
type JsonArray = JsonValue[] | readonly JsonValue[]

export type { JsonArray as default }
