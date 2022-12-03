/**
 * @file Unit Tests - Engine
 * @module pkg-types/types/tests/Engine
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../engine'

describe('unit:types/Engine', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "node"', () => {
    expectTypeOf<TestSubject>().extract<'node'>().toBeString()
  })

  it('should extract "npm"', () => {
    expectTypeOf<TestSubject>().extract<'npm'>().toBeString()
  })

  it('should extract "yarn"', () => {
    expectTypeOf<TestSubject>().extract<'yarn'>().toBeString()
  })
})
