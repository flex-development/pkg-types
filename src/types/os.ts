/**
 * @file Type Definitions - OS
 * @module pkg-types/types/OS
 */

import type { EmptyString, LiteralUnion } from '@flex-development/tutils'

/**
 * Operating system platforms a package runs on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
 * @see https://yarnpkg.com/configuration/manifest#os
 */
type OS = LiteralUnion<
  | `${EmptyString | '!'}aix`
  | `${EmptyString | '!'}darwin`
  | `${EmptyString | '!'}freebsd`
  | `${EmptyString | '!'}linux`
  | `${EmptyString | '!'}openbsd`
  | `${EmptyString | '!'}sunos`
  | `${EmptyString | '!'}win32`,
  string
>

export type { OS as default }
