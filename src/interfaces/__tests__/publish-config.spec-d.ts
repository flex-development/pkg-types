/**
 * @file Unit Tests - PublishConfig
 * @module pkg-types/interfaces/tests/PublishConfig
 */

import type TestSubject from '../publish-config'

describe('unit:interfaces/PublishConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that only has property "access"', () => {
    assertType<TestSubject>({ access: 'public' })
    assertType<TestSubject>({ access: 'restricted' })
  })

  it('should allow object that only has property "bin"', () => {
    assertType<TestSubject>({ bin: './cli.mjs' })
    assertType<TestSubject>({ bin: { mkbuild: './cli.mjs' } })
  })

  it('should allow object that only has property "executableFiles"', () => {
    assertType<TestSubject>({ executableFiles: ['./dist/shim.js'] })
  })

  it('should allow object that only has property "main"', () => {
    assertType<TestSubject>({ main: './index.cjs' })
  })

  it('should allow object that only has property "module"', () => {
    assertType<TestSubject>({ module: './index.mjs' })
  })

  it('should allow object that only has property "registry"', () => {
    assertType<TestSubject>({ registry: 'http://npm.pkg.github.com' })
  })

  it('should allow object that only has property "tag"', () => {
    assertType<TestSubject>({ tag: 'alpha' })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      access: 'public',
      bin: './cli.mjs',
      executableFiles: ['./dist/shim.js'],
      main: './index.cjs',
      module: './index.mjs',
      registry: 'http://npm.pkg.github.com',
      tag: 'alpha'
    })
  })

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ key: 'value' })
  })
})
