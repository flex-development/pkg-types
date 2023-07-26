/**
 * @file Unit Tests - DependencyMeta
 * @module pkg-types/types/tests/DependencyMeta
 */

import type { JsonObject, RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../dependency-meta'

describe('unit:types/DependencyMeta', () => {
  it('should allow empty object', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [built?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('built')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [optional?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optional')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [unplugged?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('unplugged')
      .toEqualTypeOf<boolean | undefined>()
  })
})
