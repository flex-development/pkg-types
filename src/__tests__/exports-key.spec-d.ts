/**
 * @file Unit Tests - ExportsKey
 * @module pkg-types/tests/unit-d/ExportsKey
 */

import type Condition from '../condition'
import type TestSubject from '../exports-key'
import type ExportsSubpath from '../exports-subpath'

describe('unit-d:ExportsKey', () => {
  it('should extract Condition', () => {
    expectTypeOf<TestSubject>().extract<Condition>().not.toBeNever()
  })

  it('should extract ExportsSubpath', () => {
    expectTypeOf<TestSubject>().extract<ExportsSubpath>().not.toBeNever()
  })
})
