/**
 * @file Unit Tests - Target
 * @module pkg-types/tests/unit-d/Target
 */

import type TestSubject from '#lib/target'
import type {
  ConditionalTargets,
  TargetList
} from '@flex-development/pkg-types'

describe('unit-d:Target', () => {
  it('should extract ConditionalTargets', () => {
    expectTypeOf<TestSubject>().extract<ConditionalTargets>().not.toBeNever()
  })

  it('should extract TargetList', () => {
    expectTypeOf<TestSubject>().extract<TargetList>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
