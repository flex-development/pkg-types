/**
 * @file Unit Tests - InstallConfig
 * @module pkg-types/interfaces/tests/InstallConfig
 */

import type TestSubject from '../install-config'

describe('unit:interfaces/InstallConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that only has property "hoistingLimits"', () => {
    assertType<TestSubject>({ hoistingLimits: 'workspaces' })
  })

  it('should allow object that only has property "selfReferences"', () => {
    assertType<TestSubject>({ selfReferences: true })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      hoistingLimits: 'none',
      selfReferences: true
    })
  })
})
