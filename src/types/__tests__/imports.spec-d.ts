/**
 * @file Unit Tests - Imports
 * @module pkg-types/types/tests/Imports
 */

import type TestSubject from '../imports'

describe('unit:types/Imports', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with ExportConditions values', () => {
    assertType<TestSubject>({
      '#src': { development: './src/index.ts', production: './dist/index.mjs' },
      '#src/*': { development: './src/*.ts', production: './dist/*.mjs' }
    })
  })

  it('should allow object with string values', () => {
    assertType<TestSubject>({
      '#src': './src/index.ts',
      '#src/*': './src/*.ts'
    })
  })
})
