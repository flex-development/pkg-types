/**
 * @file Unit Tests - ImportsKey
 * @module pkg-types/tests/unit-d/ImportsKey
 */

import type TestSubject from '../imports-key'

describe('unit-d:ImportsKey', () => {
  it('should equal `#${string}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`#${string}`>()
  })
})
