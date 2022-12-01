/**
 * @file Type Definitions - CPU
 * @module pkg-types/types/CPU
 */

import type { EmptyString, LiteralUnion } from '@flex-development/tutils'

/**
 * CPU architectures a package runs on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#cpu
 * @see https://yarnpkg.com/configuration/manifest
 */
type CPU = LiteralUnion<
  | `${EmptyString | '!'}arm`
  | `${EmptyString | '!'}arm64`
  | `${EmptyString | '!'}ia32`
  | `${EmptyString | '!'}mips`
  | `${EmptyString | '!'}mipsel`
  | `${EmptyString | '!'}ppc`
  | `${EmptyString | '!'}ppc64`
  | `${EmptyString | '!'}s390`
  | `${EmptyString | '!'}s390x`
  | `${EmptyString | '!'}x32`
  | `${EmptyString | '!'}x64`,
  string
>

export type { CPU as default }
