/**
 * @file Unit Tests - PackageManager
 * @module pkg-types/tests/unit-d/PackageManager
 */

import type TestSubject from '#lib/package-manager'
import type { PackageManagerMap } from '@flex-development/pkg-types'

describe('unit-d:PackageManager', () => {
  it('should equal PackageManagerMap[keyof PackageManagerMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<PackageManagerMap[keyof PackageManagerMap]>()
  })
})
