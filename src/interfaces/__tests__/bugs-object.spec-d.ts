/**
 * @file Unit Tests - BugsObject
 * @module pkg-types/interfaces/tests/BugsObject
 */

import type TestSubject from '../bugs-object'

describe('unit:interfaces/BugsObject', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with email and issue tracker url', () => {
    assertType<Required<TestSubject>>({
      email: 'project@hostname.com',
      url: 'https://github.com/owner/project/issues'
    })
  })
})
