/**
 * @file Unit Tests - ConditionalTargets
 * @module pkg-types/tests/unit-d/ConditionalTargets
 */

import type Condition from '../condition'
import type TestSubject from '../conditional-targets'
import type JsonObject from '../json-object'
import type Target from '../target'

describe('unit-d:ConditionalTargets', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Partial<Record<Condition, Target>>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Partial<Record<Condition, Target>>>()
  })
})
