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
  nodeAddons: 'node-addons'
  node: 'node'
  production: 'production'
  reactNative: 'react-native'
  require: 'require'
  types: 'types'
}

export type { ConditionMap as default }
