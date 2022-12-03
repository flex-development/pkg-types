/**
 * @file Unit Tests - Directories
 * @module pkg-types/interfaces/tests/Directories
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../directories'

describe('unit:interfaces/Directories', () => {
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
