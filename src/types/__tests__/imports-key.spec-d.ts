/**
 * @file Unit Tests - ImportsKey
 * @module pkg-types/types/tests/ImportsKey
 */

import type TestSubject from '../imports-key'

describe('unit:types/ImportsKey', () => {
  it('should allow "#src"', () => {
    assertType<TestSubject>('#src')
  })
})
