/**
 * @file Unit Tests - Access
 * @module pkg-types/tests/unit-d/Access
 */

import type TestSubject from '#lib/access'

describe('unit-d:Access', () => {
  it('should extract "public"', () => {
    expectTypeOf<TestSubject>().extract<'public'>().toBeString()
  })

  it('should extract "restricted"', () => {
    expectTypeOf<TestSubject>().extract<'restricted'>().toBeString()
  })
})
