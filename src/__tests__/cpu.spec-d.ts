/**
 * @file Unit Tests - CPU
 * @module pkg-types/tests/unit-d/CPU
 */

import type TestSubject from '#lib/cpu'
import type { CPUMap } from '@flex-development/pkg-types'

describe('unit-d:CPU', () => {
  it('should extract `!${CPUMap[keyof CPUMap]}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`!${CPUMap[keyof CPUMap]}`>()
      .not.toBeNever()
  })

  it('should extract CPUMap[keyof CPUMap]', () => {
    expectTypeOf<TestSubject>().extract<CPUMap[keyof CPUMap]>().not.toBeNever()
  })
})
