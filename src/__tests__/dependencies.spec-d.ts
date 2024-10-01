/**
 * @file Unit Tests - Dependencies
 * @module pkg-types/tests/unit-d/Dependencies
 */

import type TestSubject from '#lib/dependencies'

describe('unit-d:Dependencies', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match Record<string, string>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string>>()
  })
})
