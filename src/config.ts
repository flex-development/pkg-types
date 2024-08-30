/**
 * @file Config
 * @module pkg-types/Config
 */

import type JsonObject from './json-object'

/**
 * Configuration parameters used in package scripts.
 *
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface Config extends JsonObject {}

export type { Config as default }
