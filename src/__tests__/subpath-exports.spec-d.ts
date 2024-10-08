/**
 * @file Unit Tests - SubpathExports
 * @module pkg-types/tests/unit-d/SubpathExports
 */

import type TestSubject from '#lib/subpath-exports'
import type {
  ExportsSubpath,
  JsonObject,
  Target
} from '@flex-development/pkg-types'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:SubpathExports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [subpath: Exclude<ExportsSubpath, ".">]: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<Exclude<ExportsSubpath, '.'>>('./lib/*.mjs')
      .toEqualTypeOf<Target>()
  })

  it('should match [[subpath: string]: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<string>('')
      .toEqualTypeOf<Target>()
  })

  it('should match ["."?: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('.')
      .toEqualTypeOf<Optional<Target>>()
  })

  it('should match ["./package.json"?: Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('./package.json')
      .toEqualTypeOf<Optional<Target>>()
  })
})
