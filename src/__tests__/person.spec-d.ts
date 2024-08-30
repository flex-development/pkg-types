/**
 * @file Unit Tests - Person
 * @module pkg-types/tests/unit-d/Person
 */

import type { Nilable } from '@flex-development/tutils'
import type JsonObject from '../json-object'
import type TestSubject from '../person'

describe('unit-d:Person', () => {
  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [email?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('email')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [url?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<Nilable<string>>()
  })
})
