/**
 * @file Unit Tests - BrowserObject
 * @module pkg-types/tests/unit-d/BrowserObject
 */

import type TestSubject from '../browser-object'

describe('unit-d:BrowserObject', () => {
  it('should match Record<string, string | false>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string | false>>()
  })
})
