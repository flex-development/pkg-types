/**
 * @file ExportsList
 * @module pkg-types/ExportsList
 */

/**
 * Package exports list.
 *
 * @see https://nodejs.org/api/packages.html#exports
 */
type ExportsList = (string | null)[] | readonly (string | null)[]

export type { ExportsList as default }
