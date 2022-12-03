/**
 * @file Unit Tests - Imports
 * @module pkg-types/types/tests/Imports
 */

import type { JsonObject } from '@flex-development/tutils'
import type ExportConditions from '../export-conditions'
import type TestSubject from '../imports'
import type ImportsKey from '../imports-key'

describe('unit:types/Imports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should iterate over ImportsKey', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<ImportsKey>()
  })

  it('should map ExportConditions | string', () => {
    expectTypeOf<TestSubject[ImportsKey]>().toEqualTypeOf<
      ExportConditions | string
    >()
  })
})
