/**
 * @file Unit Tests - Directories
 * @module pkg-types/tests/unit-d/Directories
 */

import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../directories'

describe('unit-d:Directories', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match Record<string, string | null>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string | null>>()
  })

  it('should match [bin?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bin')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [doc?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('doc')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [example?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('example')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [lib?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('lib')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [man?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('man')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [src?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('src')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [test?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('test')
      .toEqualTypeOf<Nilable<string>>()
  })
})
