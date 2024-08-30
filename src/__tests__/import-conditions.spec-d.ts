/**
 * @file Unit Tests - ImportConditions
 * @module pkg-types/tests/unit-d/ImportConditions
 */

import type { Nullable } from '@flex-development/tutils'
import type Condition from '../condition'
import type TestSubject from '../import-conditions'
import type JsonObject from '../json-object'

describe('unit-d:ImportConditions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Partial<Record<Condition, string | null>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Partial<Record<Condition, Nullable<string>>>>()
  })
})
