/**
 * @file Unit Tests - FundingInfo
 * @module pkg-types/types/tests/FundingInfo
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../funding-info'
import type FundingType from '../funding-type'

describe('unit:types/FundingInfo', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [type?: FundingType]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<FundingType | undefined>()
  })

  it('should have property [url: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('url').toBeString()
  })
})
