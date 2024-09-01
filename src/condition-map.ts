/**
 * @file ConditionMap
 * @module pkg-types/ConditionMap
 */

/**
 * Registry of export and import conditions.
 *
 * @see https://nodejs.org/api/packages.html#conditional-exports
 */
interface ConditionMap {
  browser: 'browser'
  default: 'default'
  deno: 'deno'
  development: 'development'
  electron: 'electron'
  import: 'import'
  node: 'node'
  nodeAddons: 'node-addons'
  production: 'production'
  reactNative: 'react-native'
  require: 'require'
  tsNode: 'ts-node'
  types: 'types'
}

export type { ConditionMap as default }
