/**
 * @file Unit Tests - FundingType
 * @module pkg-types/types/tests/FundingType
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../funding-type'

describe('unit:types/FundingType', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "corporation"', () => {
    expectTypeOf<TestSubject>().extract<'corporation'>().toBeString()
  })

  it('should extract "foundation"', () => {
    expectTypeOf<TestSubject>().extract<'foundation'>().toBeString()
  })

  it('should extract "github"', () => {
    expectTypeOf<TestSubject>().extract<'github'>().toBeString()
  })

  it('should extract "individual"', () => {
    expectTypeOf<TestSubject>().extract<'individual'>().toBeString()
  })

  it('should extract "opencollective"', () => {
    expectTypeOf<TestSubject>().extract<'opencollective'>().toBeString()
  })

  it('should extract "patreon"', () => {
    expectTypeOf<TestSubject>().extract<'patreon'>().toBeString()
  })
})
