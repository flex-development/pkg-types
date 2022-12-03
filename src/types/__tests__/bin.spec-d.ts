/**
 * @file Unit Tests - Bin
 * @module pkg-types/types/tests/Bin
 */

import type { DependencyMap } from '#src/interfaces'
import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../bin'

describe('unit:types/Bin', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract DependencyMap<string>', () => {
    expectTypeOf<TestSubject>().extract<DependencyMap<string>>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })
})
