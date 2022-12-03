/**
 * @file Unit Tests - Access
 * @module pkg-types/types/tests/Access
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../access'

describe('unit:types/Access', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "public"', () => {
    expectTypeOf<TestSubject>().extract<'public'>().toBeString()
  })

  it('should extract "restricted"', () => {
    expectTypeOf<TestSubject>().extract<'restricted'>().toBeString()
  })
})
