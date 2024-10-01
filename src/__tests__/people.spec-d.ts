/**
 * @file Unit Tests - People
 * @module pkg-types/tests/unit-d/People
 */

import type TestSubject from '#lib/people'
import type { Person } from '@flex-development/pkg-types'

describe('unit-d:People', () => {
  it('should extract (Person | string)[]', () => {
    expectTypeOf<TestSubject>().extract<(Person | string)[]>().not.toBeNever()
  })

  it('should extract readonly (Person | string)[]', () => {
    expectTypeOf<TestSubject>()
      .extract<readonly (Person | string)[]>()
      .not.toBeNever()
  })
})
