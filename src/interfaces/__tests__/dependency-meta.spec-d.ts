/**
 * @file Unit Tests - DependencyMeta
 * @module pkg-types/interfaces/tests/DependencyMeta
 */

import type TestSubject from '../dependency-meta'

describe('unit:interfaces/DependencyMeta', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with dependency metadata', () => {
    assertType<TestSubject>({ built: false, optional: false, unplugged: false })
  })
})
