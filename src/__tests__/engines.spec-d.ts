/**
 * @file Unit Tests - Engines
 * @module pkg-types/tests/unit-d/Engines
 */

import type Engine from '../engine'
import type TestSubject from '../engines'
import type JsonObject from '../json-object'

describe('unit-d:Engines', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Partial<Record<Engine, string | null>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Partial<Record<Engine, string | null>>>()
  })
})
