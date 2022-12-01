/**
 * @file Unit Tests - Browser
 * @module pkg-types/types/tests/Browser
 */

import type TestSubject from '../browser'

describe('unit:types/Browser', () => {
  it('should allow dependency map', () => {
    assertType<TestSubject>({
      fs: false,
      path: './dist/browser-shims/path.mjs'
    })
  })

  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow path to file', () => {
    assertType<TestSubject>('./dist/browser.mjs')
  })
})
