/**
 * @file Unit Tests - Engines
 * @module pkg-types/types/tests/Engines
 */

import pkg from '../../../package.json' assert { type: 'json' }
import type TestSubject from '../engines'

describe('unit:types/Engines', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that is engine map', () => {
    assertType<Required<TestSubject>>({ ...pkg.engines, npm: 'use-yarn' })
  })
})
