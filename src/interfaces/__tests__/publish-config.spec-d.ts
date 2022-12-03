/**
 * @file Unit Tests - PublishConfig
 * @module pkg-types/interfaces/tests/PublishConfig
 */

import type { Access, Bin, Browser, Registry } from '#src/types'
import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../publish-config'

describe('unit:interfaces/PublishConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [access?: Access]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('access')
      .toEqualTypeOf<Access | undefined>()
  })

  it('should have property [bin?: Bin]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bin')
      .toEqualTypeOf<Bin | undefined>()
  })

  it('should have property [browser?: Browser]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Browser | undefined>()
  })

  it('should have property [executableFiles?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('executableFiles')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [main?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [module?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [registry?: Registry]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('registry')
      .toEqualTypeOf<Registry | undefined>()
  })

  it('should have property [tag?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tag')
      .toEqualTypeOf<string | undefined>()
  })
})
