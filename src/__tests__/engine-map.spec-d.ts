/**
 * @file Unit Tests - EngineMap
 * @module pkg-types/tests/unit-d/EngineMap
 */

import type TestSubject from '../engine-map'

describe('unit-d:EngineMap', () => {
  it('should match [node: "node"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('node').toEqualTypeOf<'node'>()
  })

  it('should match [npm: "npm"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('npm').toEqualTypeOf<'npm'>()
  })

  it('should match [yarn: "yarn"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('yarn').toEqualTypeOf<'yarn'>()
  })
})
