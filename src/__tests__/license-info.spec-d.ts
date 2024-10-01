/**
 * @file Unit Tests - LicenseInfo
 * @module pkg-types/tests/unit-d/LicenseInfo
 */

import type TestSubject from '#lib/license-info'
import type { JsonObject, Nilable } from '@flex-development/tutils'

describe('unit-d:LicenseInfo', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [type?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [url?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<Nilable<string>>()
  })
})
