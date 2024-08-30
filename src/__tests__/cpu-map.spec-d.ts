/**
 * @file Unit Tests - CPUMap
 * @module pkg-types/tests/unit-d/CPUMap
 */

import type TestSubject from '../cpu-map'

describe('unit-d:CPUMap', () => {
  it('should match [arm: "arm"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('arm').toEqualTypeOf<'arm'>()
  })

  it('should match [arm64: "arm64"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('arm64').toEqualTypeOf<'arm64'>()
  })

  it('should match [ia32: "ia32"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('ia32').toEqualTypeOf<'ia32'>()
  })

  it('should match [mips: "mips"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('mips').toEqualTypeOf<'mips'>()
  })

  it('should match [mipsel: "mipsel"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mipsel')
      .toEqualTypeOf<'mipsel'>()
  })

  it('should match [ppc: "ppc"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('ppc').toEqualTypeOf<'ppc'>()
  })

  it('should match [ppc64: "ppc64"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('ppc64').toEqualTypeOf<'ppc64'>()
  })

  it('should match [s390: "s390"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('s390').toEqualTypeOf<'s390'>()
  })

  it('should match [s390x: "s390x"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('s390x').toEqualTypeOf<'s390x'>()
  })

  it('should match [x32: "x32"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('x32').toEqualTypeOf<'x32'>()
  })

  it('should match [x64: "x64"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('x64').toEqualTypeOf<'x64'>()
  })
})
