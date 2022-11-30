/**
 * @file Unit Tests - ExportCondition
 * @module pkg-types/types/tests/ExportCondition
 */

import type TestSubject from '../export-condition'

describe('unit:types/ExportCondition', () => {
  it('should allow "browser"', () => {
    assertType<TestSubject>('browser')
  })

  it('should allow "default"', () => {
    assertType<TestSubject>('default')
  })

  it('should allow "deno"', () => {
    assertType<TestSubject>('deno')
  })

  it('should allow "development"', () => {
    assertType<TestSubject>('development')
  })

  it('should allow "electron"', () => {
    assertType<TestSubject>('electron')
  })

  it('should allow "import"', () => {
    assertType<TestSubject>('import')
  })

  it('should allow "node-addons"', () => {
    assertType<TestSubject>('node-addons')
  })

  it('should allow "node"', () => {
    assertType<TestSubject>('node')
  })

  it('should allow "production"', () => {
    assertType<TestSubject>('production')
  })

  it('should allow "react-native"', () => {
    assertType<TestSubject>('react-native')
  })

  it('should allow "require"', () => {
    assertType<TestSubject>('require')
  })

  it('should allow "types"', () => {
    assertType<TestSubject>('types')
  })
})
