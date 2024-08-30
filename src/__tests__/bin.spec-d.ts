/**
 * @file Unit Tests - Bin
 * @module pkg-types/tests/unit-d/Bin
 */

import type TestSubject from '../bin'
import type BinObject from '../bin-object'

describe('unit-d:Bin', () => {
  it('should extract BinObject', () => {
    expectTypeOf<TestSubject>().extract<BinObject>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
