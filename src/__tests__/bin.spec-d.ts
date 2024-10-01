/**
 * @file Unit Tests - Bin
 * @module pkg-types/tests/unit-d/Bin
 */

import type TestSubject from '#lib/bin'
import type { BinObject } from '@flex-development/pkg-types'

describe('unit-d:Bin', () => {
  it('should extract BinObject', () => {
    expectTypeOf<TestSubject>().extract<BinObject>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
