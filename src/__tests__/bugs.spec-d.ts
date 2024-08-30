/**
 * @file Unit Tests - Bugs
 * @module pkg-types/tests/unit-d/Bugs
 */

import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../bugs'
import type JsonObject from '../json-object'

describe('unit-d:Bugs', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [email?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('email')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [url?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<Nilable<string>>()
  })
})
