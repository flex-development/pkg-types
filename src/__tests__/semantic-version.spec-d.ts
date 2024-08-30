/**
 * @file Unit Tests - SemanticVersion
 * @module pkg-types/tests/unit-d/SemanticVersion
 */

import type TestSubject from '../semantic-version'

describe('unit-d:SemanticVersion', () => {
  it('should allow "1.0.0"', () => {
    assertType<TestSubject>('1.0.0')
  })

  it('should allow "1.0.0+0.build.1-rc.10000aaa-kk-0.1"', () => {
    assertType<TestSubject>('1.0.0+0.build.1-rc.10000aaa-kk-0.1')
  })

  it('should allow "1.0.0-0A.is.legal"', () => {
    assertType<TestSubject>('1.0.0-0A.is.legal')
  })

  it('should allow "1.0.0-alpha"', () => {
    assertType<TestSubject>('1.0.0-alpha')
  })

  it('should allow "1.0.0-alpha+beta"', () => {
    assertType<TestSubject>('1.0.0-alpha+beta')
  })

  it('should allow "1.0.0-alpha-a.b-c-long+build.1-aef.1-its-okay"', () => {
    assertType<TestSubject>('1.0.0-alpha-a.b-c-long+build.1-aef.1-its-okay')
  })

  it('should allow "1.0.0-alpha.0valid"', () => {
    assertType<TestSubject>('1.0.0-alpha.0valid')
  })

  it('should allow "1.0.0-alpha.1"', () => {
    assertType<TestSubject>('1.0.0-alpha.1')
  })

  it('should allow "1.0.0-alpha.beta"', () => {
    assertType<TestSubject>('1.0.0-alpha.beta')
  })

  it('should allow "1.0.0-alpha.beta.1"', () => {
    assertType<TestSubject>('1.0.0-alpha.beta.1')
  })

  it('should allow "1.0.0-alpha0.valid"', () => {
    assertType<TestSubject>('1.0.0-alpha0.valid')
  })

  it('should allow "1.0.0-rc.1+build.1"', () => {
    assertType<TestSubject>('1.0.0-rc.1+build.1')
  })

  it('should allow "1.1.2+meta"', () => {
    assertType<TestSubject>('1.1.2+meta')
  })

  it('should allow "1.1.2+meta-valid"', () => {
    assertType<TestSubject>('1.1.2+meta-valid')
  })

  it('should allow "1.1.2-prerelease+meta"', () => {
    assertType<TestSubject>('1.1.2-prerelease+meta')
  })

  it('should allow "1.2.3----R-S.12.9.1--.12+meta"', () => {
    assertType<TestSubject>('1.2.3----R-S.12.9.1--.12+meta')
  })

  it('should allow "1.2.3----RC-SNAPSHOT.12.9.1--.12"', () => {
    assertType<TestSubject>('1.2.3----RC-SNAPSHOT.12.9.1--.12')
  })

  it('should allow "1.2.3----RC-SNAPSHOT.12.9.1--.12+788"', () => {
    assertType<TestSubject>('1.2.3----RC-SNAPSHOT.12.9.1--.12+788')
  })

  it('should allow "1.2.3-SNAPSHOT-123"', () => {
    assertType<TestSubject>('1.2.3-SNAPSHOT-123')
  })

  it('should allow "2.0.0+build.1848"', () => {
    assertType<TestSubject>('2.0.0+build.1848')
  })

  it('should allow "2.0.0-rc.1+build.123"', () => {
    assertType<TestSubject>('2.0.0-rc.1+build.123')
  })

  it('should allow "10.2.3-DEV-SNAPSHOT"', () => {
    assertType<TestSubject>('10.2.3-DEV-SNAPSHOT')
  })

  it('should extract `${number}.${number}.${number}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`${number}.${number}.${number}`>()
      .not.toBeNever()
  })

  it('should allow `${number}.${number}.${number}-${number}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`${number}.${number}.${number}-${number}`>()
      .not.toBeNever()
  })

  it('should allow `${number}.${number}.${number}-${string}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`${number}.${number}.${number}-${string}`>()
      .not.toBeNever()
  })

  it('should allow `${number}.${number}.${number}+${number}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`${number}.${number}.${number}+${number}`>()
      .not.toBeNever()
  })

  it('should allow `${number}.${number}.${number}+${string}`', () => {
    expectTypeOf<TestSubject>()
      .extract<`${number}.${number}.${number}+${string}`>()
      .not.toBeNever()
  })
})
