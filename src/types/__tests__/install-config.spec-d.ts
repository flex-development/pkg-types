/**
 * @file Unit Tests - InstallConfig
 * @module pkg-types/types/tests/InstallConfig
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type HoisitingLimits from '../hoisiting-limits'
import type TestSubject from '../install-config'

describe('unit:types/InstallConfig', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [hoistingLimits?: HoisitingLimits]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('hoistingLimits')
      .toEqualTypeOf<HoisitingLimits | undefined>()
  })

  it('should have property [selfReferences?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('selfReferences')
      .toEqualTypeOf<boolean | undefined>()
  })
})
