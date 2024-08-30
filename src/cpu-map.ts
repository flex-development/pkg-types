/**
 * @file CPUMap
 * @module pkg-types/CPUMap
 */

/**
 * Registry of CPU architectures.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#cpu
 * @see https://yarnpkg.com/configuration/manifest
 */
interface CPUMap {
  arm: 'arm'
  arm64: 'arm64'
  ia32: 'ia32'
  mips: 'mips'
  mipsel: 'mipsel'
  ppc: 'ppc'
  ppc64: 'ppc64'
  s390: 's390'
  s390x: 's390x'
  x32: 'x32'
  x64: 'x64'
}

export type { CPUMap as default }
