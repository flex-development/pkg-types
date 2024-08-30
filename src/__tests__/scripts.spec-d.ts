/**
 * @file Unit Tests - Scripts
 * @module pkg-types/tests/unit-d/Scripts
 */

import type { Optional } from '@flex-development/tutils'
import type JsonObject from '../json-object'
import type TestSubject from '../scripts'

describe('unit-d:Scripts', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match Record<string, string>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Record<string, string>>()
  })

  it('should match [install?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('install')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postinstall?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postinstall')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postpack?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postpack')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postpublish?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postpublish')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postrestart?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postrestart')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [poststart?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('poststart')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [poststop?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('poststop')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [posttest?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('posttest')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postuninstall?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postuninstall')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [postversion?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('postversion')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [preinstall?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preinstall')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prepack?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepack')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prepare?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepare')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prepublish?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepublish')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prepublishOnly?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepublishOnly')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prerestart?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prerestart')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prestart?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prestart')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [prestop?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prestop')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [pretest?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pretest')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [preuninstall?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preuninstall')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [preversion?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preversion')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [publish?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('publish')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [restart?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('restart')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [start?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('start')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [stop?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stop')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [test?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('test')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [typecheck?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typecheck')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [uninstall?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('uninstall')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [version?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('version')
      .toEqualTypeOf<Optional<string>>()
  })
})
