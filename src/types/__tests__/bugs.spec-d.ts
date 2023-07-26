/**
 * @file Unit Tests - Bugs
 * @module pkg-types/types/tests/Bugs
 */

import type { JsonObject, RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../bugs'

describe('unit:types/Bugs', () => {
  it('should allow empty object', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [email?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('email')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [url?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<string | undefined>()
  })
})
