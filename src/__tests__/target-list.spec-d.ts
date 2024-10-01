/**
 * @file Unit Tests - TargetList
 * @module pkg-types/tests/unit-d/TargetList
 */

import type TestSubject from '#lib/target-list'
import type { ConditionalTargets } from '@flex-development/pkg-types'

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
