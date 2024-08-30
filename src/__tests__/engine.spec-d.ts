/**
 * @file Unit Tests - Engine
 * @module pkg-types/tests/unit-d/Engine
 */

import type TestSubject from '../engine'
import type EngineMap from '../engine-map'

describe('unit-d:Engine', () => {
  it('should equal EngineMap[keyof EngineMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<EngineMap[keyof EngineMap]>()
  })
})
