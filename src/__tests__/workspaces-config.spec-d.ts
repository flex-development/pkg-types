/**
 * @file Unit Tests - WorkspacesConfig
 * @module pkg-types/tests/unit-d/WorkspacesConfig
 */

import type { Nilable } from '@flex-development/tutils'
import type JsonObject from '../json-object'
import type TestSubject from '../workspaces-config'

describe('unit-d:WorkspacesConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [nohoist?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nohoist')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [packages?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('packages')
      .toEqualTypeOf<Nilable<string[]>>()
  })
})