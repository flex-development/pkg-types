/**
 * @file Unit Tests - Engines
 * @module pkg-types/types/tests/Engines
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../engines'

describe('unit:types/Engines', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [node?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('node')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [npm?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('npm')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [yarn?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('yarn')
      .toEqualTypeOf<string | undefined>()
  })
})
