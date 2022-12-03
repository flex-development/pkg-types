/**
 * @file Unit Tests - Scripts
 * @module pkg-types/interfaces/tests/Scripts
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../scripts'

describe('unit:interfaces/Scripts', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should only have string values', () => {
    expectTypeOf<TestSubject[string]>().toBeString()
  })
})
