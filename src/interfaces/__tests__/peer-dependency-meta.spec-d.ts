/**
 * @file Unit Tests - PeerDependencyMeta
 * @module pkg-types/interfaces/tests/PeerDependencyMeta
 */

import type TestSubject from '../peer-dependency-meta'

describe('unit:interfaces/PeerDependencyMeta', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with peer dependency metadat', () => {
    assertType<TestSubject>({ optional: false })
  })
})
