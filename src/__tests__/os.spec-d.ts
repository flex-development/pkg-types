/**
 * @file Unit Tests - OS
 * @module pkg-types/tests/unit-d/OS
 */

import type TestSubject from '../os'
import type OSMap from '../os-map'

describe('unit-d:OS', () => {
  it('should extract `!${OSMap[keyof OSMap]}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`!${OSMap[keyof OSMap]}`>()
      .not.toBeNever()
  })

  it('should extract OSMap[keyof OSMap]', () => {
    expectTypeOf<TestSubject>().extract<OSMap[keyof OSMap]>().not.toBeNever()
  })
})
