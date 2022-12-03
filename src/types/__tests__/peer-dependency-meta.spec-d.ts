/**
 * @file Unit Tests - PeerDependencyMeta
 * @module pkg-types/types/tests/PeerDependencyMeta
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../peer-dependency-meta'

describe('unit:types/PeerDependencyMeta', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [optional?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optional')
      .toEqualTypeOf<boolean | undefined>()
  })
})
