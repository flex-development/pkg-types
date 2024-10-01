/**
 * @file Unit Tests - RepositoryTypeMap
 * @module pkg-types/tests/unit-d/RepositoryTypeMap
 */

import type TestSubject from '#lib/repository-type-map'

describe('unit-d:RepositoryTypeMap', () => {
  it('should match [git: "git"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('git').toEqualTypeOf<'git'>()
  })
})
