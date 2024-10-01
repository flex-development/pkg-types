/**
 * @file Unit Tests - RepositoryType
 * @module pkg-types/tests/unit-d/RepositoryType
 */

import type TestSubject from '#lib/repository-type'
import type { RepositoryTypeMap } from '@flex-development/pkg-types'

describe('unit-d:RepositoryType', () => {
  it('should equal RepositoryTypeMap[keyof RepositoryTypeMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<RepositoryTypeMap[keyof RepositoryTypeMap]>()
  })
})
