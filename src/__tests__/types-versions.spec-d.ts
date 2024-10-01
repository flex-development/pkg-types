/**
 * @file Unit Tests - TypesVersions
 * @module pkg-types/tests/unit-d/TypesVersions
 */

import type TestSubject from '#lib/types-versions'
import type { JsonObject } from '@flex-development/pkg-types'

describe('unit-d:TypesVersions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<string, Record<string, string[]>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Record<string, Record<string, string[]>>>()
  })
})
