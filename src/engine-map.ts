/**
 * @file EngineMap
 * @module pkg-types/EngineMap
 */

/**
 * Registry of engines a package runs on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
interface EngineMap {
  node: 'node'
  npm: 'npm'
  yarn: 'yarn'
}

export type { EngineMap as default }
