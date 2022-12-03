/**
 * @file Unit Tests - ExportConditions
 * @module pkg-types/types/tests/ExportConditions
 */

import type { JsonObject } from '@flex-development/tutils'
import type ExportCondition from '../export-condition'
import type TestSubject from '../export-conditions'
import type Exports from '../exports'

describe('unit:types/ExportConditions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should iterate over ExportCondition', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<ExportCondition>()
  })

  it('should map Exports', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<Exports>()
  })
})
