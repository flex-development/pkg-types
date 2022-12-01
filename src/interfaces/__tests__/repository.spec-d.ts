/**
 * @file Unit Tests - Repository
 * @module pkg-types/interfaces/tests/Repository
 */

import type TestSubject from '../repository'

describe('unit:interfaces/Repository', () => {
  const type: string = 'git'
  const url: string = 'https://github.com/storybookjs/storybook.git'

  it('should allow object that only has properties "type" and "url"', () => {
    assertType<TestSubject>({ type, url })
  })

  it('should allow object with all properties', () => {
    assertType<Required<TestSubject>>({
      directory: 'frameworks/react-vite',
      type,
      url
    })
  })
})
