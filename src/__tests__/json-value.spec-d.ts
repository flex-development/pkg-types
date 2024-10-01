/**
 * @file Unit Tests - JsonValue
 * @module pkg-types/tests/unit-d/JsonValue
 */

import type TestSubject from '#lib/json-value'
import type {
  JsonArray,
  JsonObject,
  JsonPrimitive
} from '@flex-development/pkg-types'

describe('unit-d:JsonValue', () => {
  it('should extract JsonArray', () => {
    expectTypeOf<TestSubject>().extract<JsonArray>().not.toBeNever()
  })

  it('should extract JsonObject', () => {
    expectTypeOf<TestSubject>().extract<JsonObject>().not.toBeNever()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>().extract<JsonPrimitive>().not.toBeNever()
  })
})
