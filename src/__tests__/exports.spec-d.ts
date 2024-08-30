/**
 * @file Unit Tests - Exports
 * @module pkg-types/tests/unit-d/Exports
 */

import type TestSubject from '../exports'
import type ExportsList from '../exports-list'
import type ExportsObject from '../exports-object'

describe('unit-d:Exports', () => {
  it('should extract ExportsList', () => {
    expectTypeOf<TestSubject>().extract<ExportsList>().not.toBeNever()
  })

  it('should extract ExportsObject', () => {
    expectTypeOf<TestSubject>().extract<ExportsObject>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
