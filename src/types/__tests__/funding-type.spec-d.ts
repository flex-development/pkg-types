/**
 * @file Unit Tests - FundingType
 * @module pkg-types/types/tests/FundingType
 */

import type TestSubject from '../funding-type'

describe('unit:types/FundingType', () => {
  it('should allow "corporation"', () => {
    assertType<TestSubject>('corporation')
  })

  it('should allow "foundation"', () => {
    assertType<TestSubject>('foundation')
  })

  it('should allow "github"', () => {
    assertType<TestSubject>('github')
  })

  it('should allow "individual"', () => {
    assertType<TestSubject>('individual')
  })

  it('should allow "opencollective"', () => {
    assertType<TestSubject>('opencollective')
  })

  it('should allow "patreon"', () => {
    assertType<TestSubject>('patreon')
  })
})
