/**
 * @file Unit Tests - DependencyMap
 * @module pkg-types/interfaces/tests/DependencyMap
 */

import type { DependencyMeta, PeerDependencyMeta } from '#src/types'
import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../dependency-map'

describe('unit:interfaces/DependencyMap', () => {
  type Union = DependencyMeta | PeerDependencyMeta | string | false

  it('should allow empty object', () => {
    assertType<TestSubject<Union>>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject<Union>>().toMatchTypeOf<JsonObject>()
  })

  it('should return Record<string, DependencyMeta>', () => {
    expectTypeOf<TestSubject<DependencyMeta>>().toMatchTypeOf<
      Record<string, DependencyMeta>
    >()
  })

  it('should return Record<string, PeerDependencyMeta>', () => {
    expectTypeOf<TestSubject<PeerDependencyMeta>>().toMatchTypeOf<
      Record<string, PeerDependencyMeta>
    >()
  })

  it('should return Record<string, Record<string, string[]>>', () => {
    expectTypeOf<TestSubject<Record<string, string[]>>>().toMatchTypeOf<
      Record<string, Record<string, string[]>>
    >()
  })

  it('should return Record<string, string>', () => {
    expectTypeOf<TestSubject<string>>().toMatchTypeOf<Record<string, string>>()
  })

  it('should return Record<string, string | false>', () => {
    expectTypeOf<TestSubject<string | false>>().toMatchTypeOf<
      Record<string, string | false>
    >()
  })
})
