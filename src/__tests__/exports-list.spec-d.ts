/**
 * @file Unit Tests - ExportsList
 * @module pkg-types/tests/unit-d/ExportsList
 */

import type TestSubject from '../exports-list'

describe('unit-d:ExportsList', () => {
  it('should extract (string | null)[]', () => {
    expectTypeOf<TestSubject>().extract<(string | null)[]>().not.toBeNever()
  })

  it('should extract readonly (string | null)[]', () => {
    expectTypeOf<TestSubject>()
      .extract<readonly (string | null)[]>()
      .not.toBeNever()
  })
})
