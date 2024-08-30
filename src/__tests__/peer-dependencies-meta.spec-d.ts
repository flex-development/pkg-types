/**
 * @file Unit Tests - PeerDependenciesMeta
 * @module pkg-types/tests/unit-d/PeerDependenciesMeta
 */

import type JsonObject from '../json-object'
import type TestSubject from '../peer-dependencies-meta'
import type PeerDependencyMetadata from '../peer-dependency-metadata'

describe('unit-d:PeerDependenciesMeta', () => {
  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<string, PeerDependencyMetadata>', () => {
    expectTypeOf<TestSubject>()
      .toMatchTypeOf<Record<string, PeerDependencyMetadata>>()
  })
})
