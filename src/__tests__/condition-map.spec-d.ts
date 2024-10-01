/**
 * @file Unit Tests - ConditionMap
 * @module pkg-types/tests/unit-d/ConditionMap
 */

import type TestSubject from '#lib/condition-map'

describe('unit-d:ConditionMap', () => {
  it('should match [browser: "browser"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<'browser'>()
  })

  it('should match [default: "default"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('default')
      .toEqualTypeOf<'default'>()
  })

  it('should match [deno: "deno"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('deno').toEqualTypeOf<'deno'>()
  })

  it('should match [development: "development"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('development')
      .toEqualTypeOf<'development'>()
  })

  it('should match [electron: "electron"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('electron')
      .toEqualTypeOf<'electron'>()
  })

  it('should match [import: "import"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('import')
      .toEqualTypeOf<'import'>()
  })

  it('should match [nodeAddons: "node-addons"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nodeAddons')
      .toEqualTypeOf<'node-addons'>()
  })

  it('should match [node: "node"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('node').toEqualTypeOf<'node'>()
  })

  it('should match [production: "production"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('production')
      .toEqualTypeOf<'production'>()
  })

  it('should match [reactNative: "react-native"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactNative')
      .toEqualTypeOf<'react-native'>()
  })

  it('should match [require: "require"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('require')
      .toEqualTypeOf<'require'>()
  })

  it('should match [tsNode: "ts-node"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tsNode')
      .toEqualTypeOf<'ts-node'>()
  })

  it('should match [types: "types"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('types').toEqualTypeOf<'types'>()
  })
})
