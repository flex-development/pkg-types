/**
 * @file Unit Tests - TypesVersions
 * @module pkg-types/types/tests/TypesVersions
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../types-versions'

describe('unit:types/TypesVersions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with version mappings', () => {
    assertType<TestSubject>({
      '>=4.0': { '*': ['ts4.0/*'] },
      '>=3.2': { '*': ['ts3.2/*'] },
      '>=3.1': { '*': ['ts3.1/*'] }
    })
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })
})
