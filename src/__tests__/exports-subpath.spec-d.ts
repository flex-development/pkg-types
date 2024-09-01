/**
 * @file Unit Tests - ExportsSubpath
 * @module pkg-types/tests/unit-d/ExportsSubpath
 */

import type TestSubject from '../exports-subpath'

describe('unit-d:ExportsSubpath', () => {
  it('should extract "."', () => {
    expectTypeOf<TestSubject>().extract<'.'>().not.toBeNever()
  })

  it('should extract `./${string}`', () => {
    expectTypeOf<TestSubject>().extract<`./${string}`>().not.toBeNever()
  })
})
