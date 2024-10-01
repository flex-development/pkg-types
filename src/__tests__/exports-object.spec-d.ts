/**
 * @file Unit Tests - ExportsObject
 * @module pkg-types/tests/unit-d/ExportsObject
 */

import type TestSubject from '#lib/exports-object'
import type {
  ConditionalTargets,
  SubpathExports
} from '@flex-development/pkg-types'

describe('unit-d:ExportsObject', () => {
  it('should extract ConditionalTargets', () => {
    expectTypeOf<TestSubject>().extract<ConditionalTargets>().not.toBeNever()
  })

  it('should extract SubpathExports', () => {
    expectTypeOf<TestSubject>().extract<SubpathExports>().not.toBeNever()
  })
})
