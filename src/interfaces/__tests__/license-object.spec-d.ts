/**
 * @file Unit Tests - LicenseObject
 * @module pkg-types/interfaces/tests/LicenseObject
 */

import type TestSubject from '../license-object'

describe('unit:interfaces/LicenseObject', () => {
  const url: string = 'https://www.opensource.org/licenses/mit-license.php'

  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object that only has property "url"', () => {
    assertType<TestSubject>({ url })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({ type: 'MIT', url })
  })
})
