/**
 * @file Unit Tests - BinObject
 * @module pkg-types/tests/unit-d/BinObject
 */

import type TestSubject from '../bin-object'

describe('unit-d:BinObject', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match Record<string, string>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string>>()
  })
})
