/**
 * @file Unit Tests - Imports
 * @module pkg-types/tests/unit-d/Imports
 */

import type TestSubject from '#lib/imports'
import type {
  ImportsSubpath,
  JsonObject,
  Target
} from '@flex-development/pkg-types'

describe('unit-d:Imports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [[subpath: ImportsSubpath]: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<ImportsSubpath>('#')
      .toEqualTypeOf<Target>()
  })

  it('should match [[subpath: string]: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<string>('')
      .toEqualTypeOf<Target>()
  })
})
