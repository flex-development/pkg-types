/**
 * @file Unit Tests - CPU
 * @module pkg-types/types/tests/CPU
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../cpu'

describe('unit:types/CPU', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "arm"', () => {
    expectTypeOf<TestSubject>().extract<'arm'>().toBeString()
  })

  it('should extract "arm64"', () => {
    expectTypeOf<TestSubject>().extract<'arm64'>().toBeString()
  })

  it('should extract "ia32"', () => {
    expectTypeOf<TestSubject>().extract<'ia32'>().toBeString()
  })

  it('should extract "mips"', () => {
    expectTypeOf<TestSubject>().extract<'mips'>().toBeString()
  })

  it('should extract "mipsel"', () => {
    expectTypeOf<TestSubject>().extract<'mipsel'>().toBeString()
  })

  it('should extract "ppc"', () => {
    expectTypeOf<TestSubject>().extract<'ppc'>().toBeString()
  })

  it('should extract "ppc64"', () => {
    expectTypeOf<TestSubject>().extract<'ppc64'>().toBeString()
  })

  it('should extract "s390"', () => {
    expectTypeOf<TestSubject>().extract<'s390'>().toBeString()
  })

  it('should extract "s390x"', () => {
    expectTypeOf<TestSubject>().extract<'s390x'>().toBeString()
  })

  it('should extract "x32"', () => {
    expectTypeOf<TestSubject>().extract<'x32'>().toBeString()
  })

  it('should extract "x64"', () => {
    expectTypeOf<TestSubject>().extract<'x64'>().toBeString()
  })

  it('should extract "!arm"', () => {
    expectTypeOf<TestSubject>().extract<'!arm'>().toBeString()
  })

  it('should extract "!arm64"', () => {
    expectTypeOf<TestSubject>().extract<'!arm64'>().toBeString()
  })

  it('should extract "!ia32"', () => {
    expectTypeOf<TestSubject>().extract<'!ia32'>().toBeString()
  })

  it('should extract "!mips"', () => {
    expectTypeOf<TestSubject>().extract<'!mips'>().toBeString()
  })

  it('should extract "!mipsel"', () => {
    expectTypeOf<TestSubject>().extract<'!mipsel'>().toBeString()
  })

  it('should extract "!ppc"', () => {
    expectTypeOf<TestSubject>().extract<'!ppc'>().toBeString()
  })

  it('should extract "!ppc64"', () => {
    expectTypeOf<TestSubject>().extract<'!ppc64'>().toBeString()
  })

  it('should extract "!s390"', () => {
    expectTypeOf<TestSubject>().extract<'!s390'>().toBeString()
  })

  it('should extract "!s390x"', () => {
    expectTypeOf<TestSubject>().extract<'!s390x'>().toBeString()
  })

  it('should extract "!x32"', () => {
    expectTypeOf<TestSubject>().extract<'!x32'>().toBeString()
  })

  it('should extract "!x64"', () => {
    expectTypeOf<TestSubject>().extract<'!x64'>().toBeString()
  })
})
