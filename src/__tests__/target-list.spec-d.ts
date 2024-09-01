/**
 * @file Unit Tests - TargetList
 * @module pkg-types/tests/unit-d/TargetList
 */

import type ConditionalTargets from '../conditional-targets'
import type TestSubject from '../target-list'

describe('unit-d:TargetList', () => {
  describe('TargetList[number]', () => {
    it('should equal ConditionalTargets | TargetList | string | null', () => {
      // Arrange
      type Item = ConditionalTargets | TestSubject | string | null

      // Expect
      expectTypeOf<TestSubject[number]>().toEqualTypeOf<Item>()
    })
  })
})
