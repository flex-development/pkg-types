/**
 * @file Unit Tests - Person
 * @module pkg-types/types/tests/Person
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../person'

describe('unit:types/Person', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [email?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('email')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toBeString()
  })

  it('should have property [url?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<string | undefined>()
  })
})
