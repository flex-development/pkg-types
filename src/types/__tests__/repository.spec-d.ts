/**
 * @file Unit Tests - Repository
 * @module pkg-types/types/tests/Repository
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../repository'

describe('unit:types/Repository', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [directory?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('directory')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [type: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toBeString()
  })

  it('should have property [url: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('url').toBeString()
  })
})
