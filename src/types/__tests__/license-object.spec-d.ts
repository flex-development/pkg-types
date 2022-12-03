/**
 * @file Unit Tests - LicenseObject
 * @module pkg-types/types/tests/LicenseObject
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../license-object'

describe('unit:types/LicenseObject', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [type?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [url?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('url')
      .toEqualTypeOf<string | undefined>()
  })
})
