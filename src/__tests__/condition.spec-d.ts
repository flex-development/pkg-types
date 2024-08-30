/**
 * @file Unit Tests - Condition
 * @module pkg-types/tests/unit-d/Condition
 */

import type TestSubject from '../condition'
import type ConditionMap from '../condition-map'

describe('unit-d:Condition', () => {
  it('should equal ConditionMap[keyof ConditionMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<ConditionMap[keyof ConditionMap]>()
  })
})
