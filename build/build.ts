/**
 * @file build
 * @module build/build
 */

import make from '#build/make'

await make({
  dts: 'only',
  entryPoints: ['src/*.ts'],
  tsconfig: 'tsconfig.build.json',
  write: true
})
