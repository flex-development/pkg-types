/**
 * @file Unit Tests - ExportConditions
 * @module pkg-types/tests/unit-d/ExportConditions
 */

import type Condition from '../condition'
import type TestSubject from '../export-conditions'
import type Exports from '../exports'
import type JsonObject from '../json-object'

describe('unit-d:ExportConditions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Partial<Record<Condition, Exports>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Partial<Record<Condition, Exports>>>()
  })
})
