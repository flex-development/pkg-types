/**
 * @file Unit Tests - DevDependencies
 * @module pkg-types/tests/unit-d/DevDependencies
 */

import type TestSubject from '#lib/dev-dependencies'

describe('unit-d:DevDependencies', () => {
  it('should match Record<string, string>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string>>()
  })
})
