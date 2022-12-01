/**
 * @file Unit Tests - ExportConditions
 * @module pkg-types/types/tests/ExportConditions
 */

import type TestSubject from '../export-conditions'

describe('unit:types/ExportConditions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      browser: null,
      default: null,
      deno: null,
      development: null,
      electron: null,
      import: null,
      node: null,
      'node-addons': null,
      production: null,
      'react-native': null,
      require: null,
      types: null
    })
  })
})
