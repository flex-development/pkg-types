/**
 * @file Unit Tests - WorkspacesConfig
 * @module pkg-types/types/tests/WorkspacesConfig
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../workspaces-config'

describe('unit:types/WorkspacesConfig', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [nohoist?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nohoist')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [packages?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('packages')
      .toEqualTypeOf<string[] | undefined>()
  })
})
