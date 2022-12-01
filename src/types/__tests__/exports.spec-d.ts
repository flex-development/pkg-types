/**
 * @file Unit Tests - Exports
 * @module pkg-types/types/tests/Exports
 */

import type TestSubject from '../exports'

describe('unit:types/Exports', () => {
  it('should allow ExportConditions', () => {
    assertType<TestSubject>({ import: './dist/index.mjs' })
  })

  it('should allow ExportConditions[]', () => {
    assertType<TestSubject>([{ import: './dist/index.mjs' }])
  })

  it('should allow null', () => {
    assertType<TestSubject>(null)
  })

  it('should allow string', () => {
    assertType<TestSubject>('./dist/index.mjs')
  })

  it('should allow string[]', () => {
    assertType<TestSubject>(['./dist/index.mjs'])
  })
})
