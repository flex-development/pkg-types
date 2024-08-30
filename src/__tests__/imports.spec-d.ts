/**
 * @file Unit Tests - Imports
 * @module pkg-types/tests/unit-d/Imports
 */

import type ImportConditions from '../import-conditions'
import type TestSubject from '../imports'
import type ImportsKey from '../imports-key'
import type JsonObject from '../json-object'

describe('unit-d:Imports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<ImportsKey, ImportConditions | string>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Record<ImportsKey, ImportConditions | string>>()
  })
})
