/**
 * @file Unit Tests - HoistingLimits
 * @module pkg-types/types/tests/HoistingLimits
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../hoisiting-limits'

describe('unit:types/HoistingLimits', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "dependencies"', () => {
    expectTypeOf<TestSubject>().extract<'dependencies'>().toBeString()
  })

  it('should extract "none"', () => {
    expectTypeOf<TestSubject>().extract<'none'>().toBeString()
  })

  it('should extract "workspaces"', () => {
    expectTypeOf<TestSubject>().extract<'workspaces'>().toBeString()
  })
})
