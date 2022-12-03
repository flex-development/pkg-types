/**
 * @file Unit Tests - Browser
 * @module pkg-types/types/tests/Browser
 */

import type { DependencyMap } from '#src/interfaces'
import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../browser'

describe('unit:types/Browser', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract DependencyMap<string | false>', () => {
    expectTypeOf<TestSubject>()
      .extract<DependencyMap<string | false>>()
      .not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })
})
