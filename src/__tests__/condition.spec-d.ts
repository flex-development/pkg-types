/**
 * @file Unit Tests - Condition
 * @module pkg-types/tests/unit-d/Condition
 */

import type TestSubject from '#lib/condition'
import type { ConditionMap } from '@flex-development/pkg-types'

describe('unit-d:Condition', () => {
  it('should equal ConditionMap[keyof ConditionMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<ConditionMap[keyof ConditionMap]>()
  })
})
