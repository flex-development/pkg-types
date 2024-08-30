/**
 * @file Unit Tests - PackageManagerMap
 * @module pkg-types/tests/unit-d/PackageManagerMap
 */

import type TestSubject from '../package-manager-map'

describe('unit-d:PackageManagerMap', () => {
  it('should match [npm: "npm"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('npm').toEqualTypeOf<'npm'>()
  })

  it('should match [pnpm: "pnpm"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('pnpm').toEqualTypeOf<'pnpm'>()
  })

  it('should match [pnpx: "pnpx"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('pnpx').toEqualTypeOf<'pnpx'>()
  })

  it('should match [yarn: "yarn"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('yarn').toEqualTypeOf<'yarn'>()
  })

  it('should match [yarnpkg: "yarnpkg"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('yarnpkg')
      .toEqualTypeOf<'yarnpkg'>()
  })
})
