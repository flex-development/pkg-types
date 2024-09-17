/**
 * @file Unit Tests - Exports
 * @module pkg-types/tests/unit-d/Exports
 */

import type TestSubject from '../exports'
import type ExportsObject from '../exports-object'
import type TargetList from '../target-list'

describe('unit-d:Exports', () => {
  it('should extract ExportsObject', () => {
    expectTypeOf<TestSubject>().extract<ExportsObject>().not.toBeNever()
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