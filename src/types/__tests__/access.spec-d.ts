/**
 * @file Unit Tests - Access
 * @module pkg-types/types/tests/Access
 */

import type TestSubject from '../access'

describe('unit:types/Access', () => {
  it('should allow "public"', () => {
    assertType<TestSubject>('public')
  })

  it('should allow "restricted"', () => {
    assertType<TestSubject>('restricted')
  })
})
