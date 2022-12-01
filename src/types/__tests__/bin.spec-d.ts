/**
 * @file Unit Tests - Bin
 * @module pkg-types/types/tests/Bin
 */

import type TestSubject from '../bin'

describe('unit:types/BinMap', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow executable file map', () => {
    assertType<TestSubject>({ mkbuild: './dist/cli.mjs' })
  })

  it('should allow path to executable file', () => {
    assertType<TestSubject>('./dist/cli.mjs')
  })
})
