/**
 * @file Unit Tests - WorkspacesConfig
 * @module pkg-types/interfaces/tests/WorkspacesConfig
 */

import type TestSubject from '../workspaces-config'

describe('unit:interfaces/WorkspacesConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that only has nohoist rules', () => {
    assertType<TestSubject>({ nohoist: ['react-native', 'react-native/**'] })
  })

  it('should allow object that only has workspace rules', () => {
    assertType<TestSubject>({ packages: ['packages/*'] })
  })

  it('should allow object with nohoist and workspace rules', () => {
    assertType<Required<TestSubject>>({
      nohoist: ['**/react-native', '**/react-native/**'],
      packages: ['packages/*']
    })
  })
})
