/**
 * @file Unit Tests - Directories
 * @module pkg-types/interfaces/tests/Directories
 */

import type TestSubject from '../directories'

describe('unit:interfaces/Directories', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that only has property "bin"', () => {
    assertType<TestSubject>({ bin: './dist/bin' })
  })

  it('should allow object that only has property "doc"', () => {
    assertType<TestSubject>({ doc: './dist/docs' })
  })

  it('should allow object that only has property "example"', () => {
    assertType<TestSubject>({ example: './dist/docs/examples' })
  })

  it('should allow object that only has property "lib"', () => {
    assertType<TestSubject>({ lib: './dist/lib' })
  })

  it('should allow object that only has property "man"', () => {
    assertType<TestSubject>({ man: './dist/man' })
  })

  it('should allow object that only has property "src"', () => {
    assertType<TestSubject>({ src: './src' })
  })

  it('should allow object that only has property "test"', () => {
    assertType<TestSubject>({ test: './__tests__' })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      bin: './dist/bin',
      doc: './dist/docs',
      example: './dist/docs/examples',
      lib: './dist/lib',
      man: './dist/man',
      src: './src',
      test: './__tests__'
    })
  })

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ jars: 'java' })
  })
})
