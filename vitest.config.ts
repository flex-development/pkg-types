/**
 * @file Vitest Configuration
 * @module config/vitest
 * @see https://vitest.dev/config/
 */

import { ifelse, sift } from '@flex-development/tutils'
import ci from 'is-ci'
import {
  defineConfig,
  type UserConfig,
  type UserConfigExport
} from 'vitest/config'
import { BaseSequencer, type WorkspaceSpec } from 'vitest/node'
import Notifier from './__tests__/reporters/notifier'

/**
 * Vitest configuration export.
 *
 * @const {UserConfigExport} config
 */
const config: UserConfigExport = defineConfig((): UserConfig => {
  /**
   * Relative path to tsconfig file.
   *
   * @const {string} tsconfig
   */
  const tsconfig: string = 'tsconfig.typecheck.json'

  return {
    define: {},
    test: {
      allowOnly: !ci,
      environment: 'node',
      include: ['**/__tests__/*.spec-d.ts'],
      outputFile: { json: '__tests__/typecheck.json' },
      passWithNoTests: true,
      reporters: sift([ifelse(ci, null, new Notifier()), 'json', 'verbose']),
      sequence: {
        /**
         * Sorting and sharding algorithm provider.
         *
         * @see {@linkcode BaseSequencer}
         *
         * @extends {BaseSequencer}
         */
        sequencer: class Sequencer extends BaseSequencer {
          /**
           * Determines test file execution order.
           *
           * @public
           * @override
           * @async
           *
           * @param {WorkspaceSpec[]} specs
           *  Workspace spec objects
           * @return {Promise<WorkspaceSpec[]>}
           *  `files` sorted
           */
          public override async sort(
            specs: WorkspaceSpec[]
          ): Promise<WorkspaceSpec[]> {
            return (await super.sort(specs)).sort(([, file1], [, file2]) => {
              return file1.localeCompare(file2)
            })
          }
        }
      },
      setupFiles: [],
      slowTestThreshold: 3000,
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.ts'],
        only: true,
        tsconfig
      }
    }
  }
})

export default config
