/**
 * @file OS
 * @module pkg-types/OS
 */

import type OSMap from './os-map'

/**
 * Union of registered operating system platforms.
 *
 * To register new operating system platforms, augment {@linkcode OSMap}. They
 * will be added to this union automatically.
 */
type OS = `${'' | '!'}${OSMap[keyof OSMap]}`

export type { OS as default }
