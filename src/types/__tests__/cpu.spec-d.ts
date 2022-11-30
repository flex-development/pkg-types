/**
 * @file Unit Tests - CPU
 * @module pkg-types/types/tests/CPU
 */

import type TestSubject from '../cpu'

describe('unit:types/CPU', () => {
  it('should allow "arm"', () => {
    assertType<TestSubject>('arm')
  })

  it('should allow "arm64"', () => {
    assertType<TestSubject>('arm64')
  })

  it('should allow "ia32"', () => {
    assertType<TestSubject>('ia32')
  })

  it('should allow "mips"', () => {
    assertType<TestSubject>('mips')
  })

  it('should allow "mipsel"', () => {
    assertType<TestSubject>('mipsel')
  })

  it('should allow "ppc"', () => {
    assertType<TestSubject>('ppc')
  })

  it('should allow "ppc64"', () => {
    assertType<TestSubject>('ppc64')
  })

  it('should allow "s390"', () => {
    assertType<TestSubject>('s390')
  })

  it('should allow "s390x"', () => {
    assertType<TestSubject>('s390x')
  })

  it('should allow "x32"', () => {
    assertType<TestSubject>('x32')
  })

  it('should allow "x64"', () => {
    assertType<TestSubject>('x64')
  })

  it('should allow "!arm"', () => {
    assertType<TestSubject>('!arm')
  })

  it('should allow "!arm64"', () => {
    assertType<TestSubject>('!arm64')
  })

  it('should allow "!ia32"', () => {
    assertType<TestSubject>('!ia32')
  })

  it('should allow "!mips"', () => {
    assertType<TestSubject>('!mips')
  })

  it('should allow "!mipsel"', () => {
    assertType<TestSubject>('!mipsel')
  })

  it('should allow "!ppc"', () => {
    assertType<TestSubject>('!ppc')
  })

  it('should allow "!ppc64"', () => {
    assertType<TestSubject>('!ppc64')
  })

  it('should allow "!s390"', () => {
    assertType<TestSubject>('!s390')
  })

  it('should allow "!s390x"', () => {
    assertType<TestSubject>('!s390x')
  })

  it('should allow "!x32"', () => {
    assertType<TestSubject>('!x32')
  })

  it('should allow "!x64"', () => {
    assertType<TestSubject>('!x64')
  })
})
