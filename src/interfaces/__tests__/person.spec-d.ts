/**
 * @file Unit Tests - Person
 * @module pkg-types/interfaces/tests/Person
 */

import pkg from '../../../package.json' assert { type: 'json' }
import type TestSubject from '../person'

describe('unit:interfaces/Person', () => {
  it('should allow object that only has property "name"', () => {
    assertType<TestSubject>({ name: pkg.author.name })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      ...pkg.author,
      email: 'unicornware@flexdevelopment.llc'
    })
  })
})
