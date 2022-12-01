/**
 * @file Interfaces - InstallConfig
 * @module pkg-types/interfaces/InstallConfig
 */

import type { HoistingLimits } from '#src/types'

/**
 * Yarn workspace install configuration.
 *
 * @see https://yarnpkg.com/configuration/manifest#installConfig
 */
interface InstallConfig {
  /**
   * Highest point where packages can be hoisted.
   *
   * [1]: https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits
   *
   * **Note**: Overrides [`nmHoistingLimits`][1].
   */
  hoistingLimits?: HoistingLimits

  /**
   * Indicates if workspace is allowed to require itself. Results in creation of
   * self-referencing symlinks.
   *
   * [1]: https://yarnpkg.com/configuration/yarnrc#nmSelfReferences
   *
   * **Note**: Overrides [`nmSelfReferences`][1].
   */
  selfReferences?: boolean
}

export type { InstallConfig as default }
