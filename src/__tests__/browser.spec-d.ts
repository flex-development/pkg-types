/**
 * @file Unit Tests - Browser
 * @module pkg-types/tests/unit-d/Browser
 */

import type TestSubject from '#lib/browser'
import type { BrowserObject } from '@flex-development/pkg-types'

describe('unit-d:Browser', () => {
  it('should extract BrowserObject', () => {
    expectTypeOf<TestSubject>().extract<BrowserObject>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })
})
