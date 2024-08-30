/**
 * @file Unit Tests - ExportsObject
 * @module pkg-types/tests/unit-d/ExportsObject
 */

import type ExportConditions from '../export-conditions'
import type TestSubject from '../exports-object'
import type SubpathExports from '../subpath-exports'

describe('unit-d:ExportsObject', () => {
  it('should extract ExportConditions', () => {
    expectTypeOf<TestSubject>().extract<ExportConditions>().not.toBeNever()
  })

  it('should extract SubpathExports', () => {
    expectTypeOf<TestSubject>().extract<SubpathExports>().not.toBeNever()
  })
})
