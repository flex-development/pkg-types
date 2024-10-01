/**
 * @file Unit Tests - ExportsKey
 * @module pkg-types/tests/unit-d/ExportsKey
 */

import type TestSubject from '#lib/exports-key'
import type { Condition, ExportsSubpath } from '@flex-development/pkg-types'

describe('unit-d:ExportsKey', () => {
  it('should extract Condition', () => {
    expectTypeOf<TestSubject>().extract<Condition>().not.toBeNever()
  })

  it('should extract ExportsSubpath', () => {
    expectTypeOf<TestSubject>().extract<ExportsSubpath>().not.toBeNever()
  })
})
