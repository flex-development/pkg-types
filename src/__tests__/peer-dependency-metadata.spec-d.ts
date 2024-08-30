/**
 * @file Unit Tests - PeerDependencyMetadata
 * @module pkg-types/tests/unit-d/PeerDependencyMetadata
 */

import type { Nilable } from '@flex-development/tutils'
import type JsonObject from '../json-object'
import type TestSubject from '../peer-dependency-metadata'

describe('unit-d:PeerDependencyMetadata', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [optional?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optional')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
