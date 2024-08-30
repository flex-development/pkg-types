/**
 * @file Unit Tests - Config
 * @module pkg-types/tests/unit-d/Config
 */

import type TestSubject from '../config'
import type JsonObject from '../json-object'

describe('unit-d:Config', () => {
  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })
})
