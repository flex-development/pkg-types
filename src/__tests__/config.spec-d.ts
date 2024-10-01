/**
 * @file Unit Tests - Config
 * @module pkg-types/tests/unit-d/Config
 */

import type TestSubject from '#lib/config'
import type { JsonObject } from '@flex-development/pkg-types'

describe('unit-d:Config', () => {
  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })
})
