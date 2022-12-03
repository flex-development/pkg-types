/**
 * @file Unit Tests - OS
 * @module pkg-types/types/tests/OS
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../os'

describe('unit:types/OS', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "aix"', () => {
    expectTypeOf<TestSubject>().extract<'aix'>().toBeString()
  })

  it('should extract "darwin"', () => {
    expectTypeOf<TestSubject>().extract<'darwin'>().toBeString()
  })

  it('should extract "freebsd"', () => {
    expectTypeOf<TestSubject>().extract<'freebsd'>().toBeString()
  })

  it('should extract "linux"', () => {
    expectTypeOf<TestSubject>().extract<'linux'>().toBeString()
  })

  it('should extract "openbsd"', () => {
    expectTypeOf<TestSubject>().extract<'openbsd'>().toBeString()
  })

  it('should extract "sunos"', () => {
    expectTypeOf<TestSubject>().extract<'sunos'>().toBeString()
  })

  it('should extract "win32"', () => {
    expectTypeOf<TestSubject>().extract<'win32'>().toBeString()
  })

  it('should extract "!aix"', () => {
    expectTypeOf<TestSubject>().extract<'!aix'>().toBeString()
  })

  it('should extract "!darwin"', () => {
    expectTypeOf<TestSubject>().extract<'!darwin'>().toBeString()
  })

  it('should extract "!freebsd"', () => {
    expectTypeOf<TestSubject>().extract<'!freebsd'>().toBeString()
  })

  it('should extract "!linux"', () => {
    expectTypeOf<TestSubject>().extract<'!linux'>().toBeString()
  })

  it('should extract "!openbsd"', () => {
    expectTypeOf<TestSubject>().extract<'!openbsd'>().toBeString()
  })

  it('should extract "!sunos"', () => {
    expectTypeOf<TestSubject>().extract<'!sunos'>().toBeString()
  })

  it('should extract "!win32"', () => {
    expectTypeOf<TestSubject>().extract<'!win32'>().toBeString()
  })
})
