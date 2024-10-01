/**
 * @file Unit Tests - PeerDependenciesMeta
 * @module pkg-types/tests/unit-d/PeerDependenciesMeta
 */

import type TestSubject from '#lib/peer-dependencies-meta'
import type {
  JsonObject,
  PeerDependencyMetadata
} from '@flex-development/pkg-types'

describe('unit-d:PeerDependenciesMeta', () => {
  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<string, PeerDependencyMetadata>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Record<string, PeerDependencyMetadata>>()
  })
})
