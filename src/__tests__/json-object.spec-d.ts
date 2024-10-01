/**
 * @file Unit Tests - JsonObject
 * @module pkg-types/tests/unit-d/JsonObject
 */

import type TestSubject from '#lib/json-object'
import type { JsonValue } from '@flex-development/pkg-types'

describe('unit-d:JsonObject', () => {
  it('should match Record<string, JsonValue>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, JsonValue>>()
  })

  describe('JsonObject[number]', () => {
    it('should not allow undefined', () => {
      expectTypeOf<TestSubject[number]>().extract<undefined>().toBeNever()
    })
  })

  describe('JsonObject[string]', () => {
    it('should not allow undefined', () => {
      expectTypeOf<TestSubject[string]>().extract<undefined>().toBeNever()
    })
  })
})
