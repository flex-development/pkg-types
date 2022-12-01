/**
 * @file Unit Tests - FundingInfo
 * @module pkg-types/interfaces/tests/FundingInfo
 */

import type TestSubject from '../funding-info'

describe('unit:interfaces/FundingInfo', () => {
  const url: string = 'https://github.com/sponsors/flex-development'

  it('should allow object that only has property "url"', () => {
    assertType<TestSubject>({ url })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({ type: 'github', url })
  })
})
