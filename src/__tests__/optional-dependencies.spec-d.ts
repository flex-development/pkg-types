/**
 * @file Unit Tests - OptionalDependencies
 * @module pkg-types/tests/unit-d/OptionalDependencies
 */

import type TestSubject from '#lib/optional-dependencies'

describe('unit-d:OptionalDependencies', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match Record<string, string>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string>>()
  })
})
