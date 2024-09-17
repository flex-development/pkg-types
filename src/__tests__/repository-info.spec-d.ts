/**
 * @file Unit Tests - RepositoryInfo
 * @module pkg-types/tests/unit-d/RepositoryInfo
 */

import type { Nilable } from '@flex-development/tutils'
import type JsonObject from '../json-object'
import type TestSubject from '../repository-info'
import type RepositoryType from '../repository-type'

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