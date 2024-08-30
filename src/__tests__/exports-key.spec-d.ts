/**
 * @file Unit Tests - ExportsKey
 * @module pkg-types/tests/unit-d/ExportsKey
 */

import type Condition from '../condition'
import type TestSubject from '../exports-key'

describe('unit-d:ExportsKey', () => {
  it('should extract "."', () => {
    expectTypeOf<TestSubject>().extract<'.'>().not.toBeNever()
  })

  it('should extract `./${string}`', () => {
    expectTypeOf<TestSubject>().extract<`./${string}`>().not.toBeNever()
  })

  it('should extract Condition', () => {
    expectTypeOf<TestSubject>().extract<Condition>().not.toBeNever()
  })
})
