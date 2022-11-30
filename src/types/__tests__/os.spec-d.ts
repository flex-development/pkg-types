/**
 * @file Unit Tests - OS
 * @module pkg-types/types/tests/OS
 */

import type TestSubject from '../os'

describe('unit:types/OS', () => {
  it('should allow "aix"', () => {
    assertType<TestSubject>('aix')
  })

  it('should allow "darwin"', () => {
    assertType<TestSubject>('darwin')
  })

  it('should allow "freebsd"', () => {
    assertType<TestSubject>('freebsd')
  })

  it('should allow "linux"', () => {
    assertType<TestSubject>('linux')
  })

  it('should allow "openbsd"', () => {
    assertType<TestSubject>('openbsd')
  })

  it('should allow "sunos"', () => {
    assertType<TestSubject>('sunos')
  })

  it('should allow "ppc64"', () => {
    assertType<TestSubject>('ppc64')
  })

  it('should allow "win32"', () => {
    assertType<TestSubject>('win32')
  })

  it('should allow "!aix"', () => {
    assertType<TestSubject>('!aix')
  })

  it('should allow "!darwin"', () => {
    assertType<TestSubject>('!darwin')
  })

  it('should allow "!freebsd"', () => {
    assertType<TestSubject>('!freebsd')
  })

  it('should allow "!linux"', () => {
    assertType<TestSubject>('!linux')
  })

  it('should allow "!openbsd"', () => {
    assertType<TestSubject>('!openbsd')
  })

  it('should allow "!sunos"', () => {
    assertType<TestSubject>('!sunos')
  })

  it('should allow "!ppc64"', () => {
    assertType<TestSubject>('!ppc64')
  })

  it('should allow "!win32"', () => {
    assertType<TestSubject>('!win32')
  })
})
