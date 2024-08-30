/**
 * @file Unit Tests - PackageManager
 * @module pkg-types/tests/unit-d/PackageManager
 */

import type TestSubject from '../package-manager'
import type PackageManagerMap from '../package-manager-map'

describe('unit-d:PackageManager', () => {
  it('should equal PackageManagerMap[keyof PackageManagerMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<PackageManagerMap[keyof PackageManagerMap]>()
  })
})
