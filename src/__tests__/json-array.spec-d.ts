/**
 * @file Unit Tests - JsonArray
 * @module pkg-types/tests/unit-d/JsonArray
 */

import type TestSubject from '../json-array'
import type JsonValue from '../json-value'

describe('unit-d:JsonArray', () => {
  it('should allow readonly list', () => {
    // Arrange
    type Test = readonly TestSubject[number][] extends TestSubject ? 1 : 0

    // Expect
    expectTypeOf<Test>().toEqualTypeOf<1>()
  })

  describe('JsonArray[number]', () => {
    it('should extract JsonValue', () => {
      expectTypeOf<TestSubject[number]>().extract<JsonValue>().not.toBeNever()
    })
  })
})