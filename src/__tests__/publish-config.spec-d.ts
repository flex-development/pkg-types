/**
 * @file Unit Tests - PublishConfig
 * @module pkg-types/tests/unit-d/PublishConfig
 */

import type { Nilable } from '@flex-development/tutils'
import type Access from '../access'
import type Bin from '../bin'
import type Browser from '../browser'
import type JsonObject from '../json-object'
import type TestSubject from '../publish-config'

describe('unit-d:PublishConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [access?: Access | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('access')
      .toEqualTypeOf<Nilable<Access>>()
  })

  it('should match [bin?: Bin | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bin')
      .toEqualTypeOf<Nilable<Bin>>()
  })

  it('should match [browser?: Browser | boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Nilable<Browser | boolean>>()
  })

  it('should match [executableFiles?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('executableFiles')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [main?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [module?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [main?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [tag?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tag')
      .toEqualTypeOf<Nilable<string>>()
  })
})
