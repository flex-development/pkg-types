/**
 * @file LicenseInfo
 * @module pkg-types/LicenseInfo
 */

import type { JsonObject } from '@flex-development/pkg-types'

/**
 * Package license info.
 *
 * @see {@linkcode JsonObject}
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
 *
 * @extends {JsonObject}
 */
interface LicenseInfo extends JsonObject {
  /**
   * [SPDX identifier][spdx].
   *
   * [spdx]: https://spdx.org/licenses
   */
  type?: string | null

  /**
   * License URL.
   */
  url?: string | null
}

export type { LicenseInfo as default }
