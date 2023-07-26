/**
 * @file Unit Tests - Exports
 * @module pkg-types/types/tests/Exports
 */

import type { JsonValue } from '@flex-development/tutils'
import type ExportConditions from '../export-conditions'
import type TestSubject from '../exports'

describe('unit:types/Exports', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract (ExportConditions | string)[]', () => {
    expectTypeOf<TestSubject>()
      .extract<(ExportConditions | string)[]>()
      .not.toBeNever()
  })

  it('should extract ExportConditions', () => {
    expectTypeOf<TestSubject>().extract<ExportConditions>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().toBeNull()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().toBeString()
  })
})
