/**
 * @file Unit Tests - ConditionalTargets
 * @module pkg-types/tests/unit-d/ConditionalTargets
 */

import type TestSubject from '#lib/conditional-targets'
import type { Condition, JsonObject, Target } from '@flex-development/pkg-types'

describe('unit-d:ConditionalTargets', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Partial<Record<Condition, Target>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Partial<Record<Condition, Target>>>()
  })
})
