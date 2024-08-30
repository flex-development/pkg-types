/**
 * @file Unit Tests - SubpathExports
 * @module pkg-types/tests/unit-d/SubpathExports
 */

import type { Optional } from '@flex-development/tutils'
import type Exports from '../exports'
import type JsonObject from '../json-object'
import type TestSubject from '../subpath-exports'

describe('unit-d:SubpathExports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<`./${string}`, Exports>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<`./${string}`, Exports>>()
  })

  it('should match ["."?: Exports]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('.')
      .toEqualTypeOf<Optional<Exports>>()
  })

  it('should match ["./package.json"?: Exports]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('./package.json')
      .toEqualTypeOf<Optional<Exports>>()
  })
})
