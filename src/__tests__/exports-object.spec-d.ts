/**
 * @file Unit Tests - ExportsObject
 * @module pkg-types/tests/unit-d/ExportsObject
 */

import type ConditionalTargets from '../conditional-targets'
import type TestSubject from '../exports-object'
import type SubpathExports from '../subpath-exports'

describe('unit-d:ExportsObject', () => {
  it('should extract ConditionalTargets', () => {
    expectTypeOf<TestSubject>().extract<ConditionalTargets>().not.toBeNever()
  })

  it('should extract SubpathExports', () => {
    expectTypeOf<TestSubject>().extract<SubpathExports>().not.toBeNever()
  })
})
