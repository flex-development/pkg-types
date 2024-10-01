/**
 * @file Unit Tests - ImportsSubpath
 * @module pkg-types/tests/unit-d/ImportsSubpath
 */

import type TestSubject from '#lib/imports-subpath'

describe('unit-d:ImportsSubpath', () => {
  it('should equal `#${string}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`#${string}`>()
  })
})
