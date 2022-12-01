/**
 * @file Unit Tests - FundingObject
 * @module pkg-types/interfaces/tests/FundingObject
 */

import type TestSubject from '../funding-object'

describe('unit:interfaces/FundingObject', () => {
  const url: string = 'https://github.com/sponsors/flex-development'

  it('should allow object that only has property "url"', () => {
    assertType<TestSubject>({ url })
  })

  it('should allow object with funding account url and funding type', () => {
    assertType<Required<TestSubject>>({ type: 'github', url })
  })
})
