/**
 * @file Unit Tests - Registry
 * @module pkg-types/types/tests/Registry
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../registry'

describe('unit:types/Registry', () => {
  it('should allow "http://npm.pkg.github.com"', () => {
    assertType<TestSubject>('http://npm.pkg.github.com')
  })

  it('should allow "https://npm.pkg.github.com"', () => {
    assertType<TestSubject>('https://npm.pkg.github.com')
  })

  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })
})
