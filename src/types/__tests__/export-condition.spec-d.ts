/**
 * @file Unit Tests - ExportCondition
 * @module pkg-types/types/tests/ExportCondition
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../export-condition'

describe('unit:types/ExportCondition', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "browser"', () => {
    expectTypeOf<TestSubject>().extract<'browser'>().toBeString()
  })

  it('should extract "default"', () => {
    expectTypeOf<TestSubject>().extract<'default'>().toBeString()
  })

  it('should extract "deno"', () => {
    expectTypeOf<TestSubject>().extract<'deno'>().toBeString()
  })

  it('should extract "development"', () => {
    expectTypeOf<TestSubject>().extract<'development'>().toBeString()
  })

  it('should extract "electron"', () => {
    expectTypeOf<TestSubject>().extract<'electron'>().toBeString()
  })

  it('should extract "import"', () => {
    expectTypeOf<TestSubject>().extract<'import'>().toBeString()
  })

  it('should extract "node-addons"', () => {
    expectTypeOf<TestSubject>().extract<'node-addons'>().toBeString()
  })

  it('should extract "node"', () => {
    expectTypeOf<TestSubject>().extract<'node'>().toBeString()
  })

  it('should extract "production"', () => {
    expectTypeOf<TestSubject>().extract<'production'>().toBeString()
  })

  it('should extract "react-native"', () => {
    expectTypeOf<TestSubject>().extract<'react-native'>().toBeString()
  })

  it('should extract "require"', () => {
    expectTypeOf<TestSubject>().extract<'require'>().toBeString()
  })

  it('should extract "types"', () => {
    expectTypeOf<TestSubject>().extract<'types'>().toBeString()
  })
})
