/**
 * @file Unit Tests - PeerDependencyMetadata
 * @module pkg-types/tests/unit-d/PeerDependencyMetadata
 */

import type TestSubject from '#lib/peer-dependency-metadata'
import type { JsonObject } from '@flex-development/pkg-types'
import type { Nilable } from '@flex-development/tutils'

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
