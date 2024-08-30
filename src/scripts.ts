/**
 * @file Scripts
 * @module pkg-types/Scripts
 */

/**
 * Package lifecycle scripts.
 *
 * @see https://docs.npmjs.com/cli/using-npm/scripts
 * @see https://yarnpkg.com/advanced/lifecycle-scripts
 * @see https://classic.yarnpkg.com/en/docs/package-json#toc-scripts
 */
interface Scripts {
  [script: string]: string

  install?: string
  postinstall?: string
  postpack?: string
  postpublish?: string
  postrestart?: string
  poststart?: string
  poststop?: string
  posttest?: string
  postuninstall?: string
  postversion?: string
  preinstall?: string
  prepack?: string
  prepare?: string
  prepublish?: string
  prepublishOnly?: string
  prerestart?: string
  prestart?: string
  prestop?: string
  pretest?: string
  preuninstall?: string
  preversion?: string
  publish?: string
  restart?: string
  start?: string
  stop?: string
  test?: string
  typecheck?: string
  uninstall?: string
  version?: string
}

export type { Scripts as default }
