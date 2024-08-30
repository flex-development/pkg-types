/**
 * @file Unit Tests - RepositoryType
 * @module pkg-types/tests/unit-d/RepositoryType
 */

import type TestSubject from '../repository-type'
import type RepositoryTypeMap from '../repository-type-map'

describe('unit-d:RepositoryType', () => {
  it('should equal RepositoryTypeMap[keyof RepositoryTypeMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<RepositoryTypeMap[keyof RepositoryTypeMap]>()
  })
})
