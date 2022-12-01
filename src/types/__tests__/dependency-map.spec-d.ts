/**
 * @file Unit Tests - DependencyMap
 * @module pkg-types/types/tests/DependencyMap
 */

import type { DependencyMeta, PeerDependencyMeta } from '#src/interfaces'
import pkg from '../../../package.json' assert { type: 'json' }
import type TestSubject from '../dependency-map'

describe('unit:types/DependencyMap', () => {
  it('should allow dependency map', () => {
    assertType<TestSubject<string>>(pkg.devDependencies)
  })

  it('should allow dependency for browsers', () => {
    assertType<TestSubject<string | false>>({
      fs: false,
      path: './dist/browser-shims/path.mjs'
    })
  })

  it('should allow dependency metadata map', () => {
    assertType<TestSubject<DependencyMeta>>({
      fsevents: { built: false, optional: false, unplugged: true }
    })
  })

  it('should allow peer dependency metadata map', () => {
    assertType<TestSubject<PeerDependencyMeta>>({
      '@flex-development/tutils': { optional: false }
    })
  })

  it('should allow empty object', () => {
    // Arrange
    type T = DependencyMeta | PeerDependencyMeta | string | false

    // Expect
    assertType<TestSubject<T>>({})
  })
})
