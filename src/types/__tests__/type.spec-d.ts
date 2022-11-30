/**
 * @file Unit Tests - Type
 * @module pkg-types/types/tests/Type
 */

import type TestSubject from '../type'

describe('unit:types/Type', () => {
  it('should allow "commonjs"', () => {
    assertType<TestSubject>('commonjs')
  })

  it('should allow "module"', () => {
    assertType<TestSubject>('module')
  })
})
