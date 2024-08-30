/**
 * @file PeerDependencyMetadata
 * @module pkg-types/PeerDependencyMetadata
 */

import type JsonObject from './json-object'

/**
 * Peer dependency metadata.
 *
 * @see {@linkcode JsonObject}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
 * @see https://yarnpkg.com/configuration/manifest#peerDependenciesMeta
 *
 * @extends {JsonObject}
 */
interface PeerDependencyMetadata extends JsonObject {
  /**
   * Indicate the peer dependency as optional.
   *
   * A package consumer omitting the dependency will not raise an error.
   */
  optional?: boolean | null
}

export type { PeerDependencyMetadata as default }
