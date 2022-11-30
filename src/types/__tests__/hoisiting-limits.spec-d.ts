/**
 * @file Unit Tests - HoistingLimits
 * @module pkg-types/types/tests/HoistingLimits
 */

import type TestSubject from '../hoisiting-limits'

describe('unit:types/HoistingLimits', () => {
  it('should allow "dependencies"', () => {
    assertType<TestSubject>('dependencies')
  })

  it('should allow "none"', () => {
    assertType<TestSubject>('none')
  })

  it('should allow "workspaces"', () => {
    assertType<TestSubject>('workspaces')
  })
})
