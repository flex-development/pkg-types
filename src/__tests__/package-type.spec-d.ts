/**
 * @file Unit Tests - PackageType
 * @module pkg-types/tests/unit-d/PackageType
 */

import type TestSubject from '#lib/package-type'

describe('unit-d:PackageType', () => {
  it('should extract "commonjs"', () => {
    expectTypeOf<TestSubject>().extract<'commonjs'>().not.toBeNever()
  })

  it('should extract "module"', () => {
    expectTypeOf<TestSubject>().extract<'module'>().not.toBeNever()
  })
})
