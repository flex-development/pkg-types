/**
 * @file Unit Tests - Engines
 * @module pkg-types/tests/unit-d/Engines
 */

import type TestSubject from '#lib/engines'
import type { Engine, JsonObject } from '@flex-development/pkg-types'

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
