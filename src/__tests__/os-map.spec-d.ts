/**
 * @file Unit Tests - OSMap
 * @module pkg-types/tests/unit-d/OSMap
 */

import type TestSubject from '#lib/os-map'

describe('unit-d:OSMap', () => {
  it('should match [aix: "aix"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('aix').toEqualTypeOf<'aix'>()
  })

  it('should match [darwin: "darwin"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('darwin')
      .toEqualTypeOf<'darwin'>()
  })

  it('should match [freebsd: "freebsd"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('freebsd')
      .toEqualTypeOf<'freebsd'>()
  })

  it('should match [linux: "linux"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('linux')
      .toEqualTypeOf<'linux'>()
  })

  it('should match [openbsd: "openbsd"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('openbsd')
      .toEqualTypeOf<'openbsd'>()
  })

  it('should match [sunos: "sunos"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('sunos').toEqualTypeOf<'sunos'>()
  })

  it('should match [win32: "win32"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('win32').toEqualTypeOf<'win32'>()
  })
})
