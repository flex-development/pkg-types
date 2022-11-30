/**
 * @file Unit Tests - Engine
 * @module pkg-types/types/tests/Engine
 */

import type TestSubject from '../engine'

describe('unit:types/Engine', () => {
  it('should allow "node"', () => {
    assertType<TestSubject>('node')
  })

  it('should allow "npm"', () => {
    assertType<TestSubject>('npm')
  })

  it('should allow "yarn"', () => {
    assertType<TestSubject>('yarn')
  })
})
