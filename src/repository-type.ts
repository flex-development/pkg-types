/**
 * @file RepositoryType
 * @module pkg-types/RepositoryType
 */

import type { RepositoryTypeMap } from '@flex-development/pkg-types'

/**
 * Union of registered repository types.
 *
 * To register new repository types, augment {@linkcode RepositoryTypeMap}. They
 * will be added to this union automatically.
 */
type RepositoryType = RepositoryTypeMap[keyof RepositoryTypeMap]

export type { RepositoryType as default }
