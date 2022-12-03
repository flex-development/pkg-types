/**
 * @file Unit Tests - Type
 * @module pkg-types/types/tests/Type
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../type'

describe('unit:types/Type', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "commonjs"', () => {
    expectTypeOf<TestSubject>().extract<'commonjs'>().toBeString()
  })

  it('should extract "module"', () => {
    expectTypeOf<TestSubject>().extract<'module'>().toBeString()
  })
})
