/**
 * @file Unit Tests - RepositoryInfo
 * @module pkg-types/tests/unit-d/RepositoryInfo
 */

import type TestSubject from '#lib/repository-info'
import type { JsonObject, RepositoryType } from '@flex-development/pkg-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:RepositoryInfo', () => {
  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [directory?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('directory')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [type: RepositoryType]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<RepositoryType>()
  })

  it('should match [url: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('url').toEqualTypeOf<string>()
  })
})
