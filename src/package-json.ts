/**
 * @file PackageJson
 * @module pkg-types/PackageJson
 */

import type Bin from './bin'
import type Browser from './browser'
import type Bugs from './bugs'
import type Config from './config'
import type CPU from './cpu'
import type Dependencies from './dependencies'
import type DevDependencies from './dev-dependencies'
import type Directories from './directories'
import type Engines from './engines'
import type Exports from './exports'
import type Imports from './imports'
import type JsonObject from './json-object'
import type JsonValue from './json-value'
import type LicenseInfo from './license-info'
import type OptionalDependencies from './optional-dependencies'
import type OS from './os'
import type PackageManager from './package-manager'
import type PackageType from './package-type'
import type PeerDependencies from './peer-dependencies'
import type PeerDependenciesMeta from './peer-dependencies-meta'
import type People from './people'
import type Person from './person'
import type PublishConfig from './publish-config'
import type RepositoryInfo from './repository-info'
import type Scripts from './scripts'
import type SemanticVersion from './semantic-version'
import type TypesVersions from './types-versions'
import type WorkspacesConfig from './workspaces-config'

/**
 * Package manifest.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by a manifest specification.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode JsonValue}.
 *
 * @example
 *  declare module '@flex-development/pkg-types' {
 *    interface GreaseConfig extends JsonObject {}
 *
 *    interface PackageJson {
 *      grease?: GreaseConfig | null
 *    }
 *  }
 *
 * @see {@linkcode JsonObject}
 * @see https://docs.npmjs.com/cli/configuring-npm/package-json
 * @see https://yarnpkg.com/configuration/manifest
 *
 * @extends {JsonObject}
 */
interface PackageJson extends JsonObject {
  /**
   * Package id.
   *
   * Typically of the format `<name>@<version>`.
   *
   * @see {@linkcode name}
   * @see {@linkcode version}
   */
  _id?: string | null

  /**
   * Person who created the package.
   *
   * @see {@linkcode Person}
   */
  author?: Person | string | null

  /**
   * Executable files to install into `PATH`.
   *
   * @see {@linkcode Bin}
   */
  bin?: Bin | null

  /**
   * Hint to JavaScript bundlers or component tools when packaging modules for
   * client side use.
   *
   * @see {@linkcode Browser}
   */
  browser?: Browser | null

  /**
   * Issue tracker info.
   *
   * @see {@linkcode Bugs}
   */
  bugs?: Bugs | string | null

  /**
   * Names of packages that will be bundled when package is published.
   */
  bundleDependencies?: string[] | null

  /**
   * Alias for {@linkcode bundleDependencies}.
   */
  bundledDependencies?: string[] | null

  /**
   * Configuration parameters used in package scripts.
   *
   * @see {@linkcode Config}
   */
  config?: Config | null

  /**
   * People who contributed to the package.
   *
   * @see {@linkcode People}
   */
  contributors?: People | null

  /**
   * CPU architectures the package runs on.
   *
   * @see {@linkcode CPU}
   */
  cpu?: CPU[] | null

  /**
   * Packages required for the package to function properly.
   *
   * @see {@linkcode Dependencies}
   */
  dependencies?: Dependencies | null

  /**
   * Dependencies used during package development only.
   *
   * These dependencies are not required for the package to function properly.
   *
   * @see {@linkcode DevDependencies}
   */
  devDependencies?: DevDependencies | null

  /**
   * Package description.
   */
  description?: string | null

  /**
   * Package structure.
   *
   * @see {@linkcode Directories}
   */
  directories?: Directories | null

  /**
   * Enforce {@linkcode engines}.
   */
  engineStrict?: boolean | null

  /**
   * Engines the package runs on.
   *
   * @see {@linkcode Engines}
   */
  engines?: Engines | null

  /**
   * Package entry points.
   *
   * @see {@linkcode Exports}
   */
  exports?: Exports

  /**
   * Files included in published package, or glob patterns matching included
   * files.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
   * @see https://yarnpkg.com/configuration/manifest#files
   */
  files?: string[] | null

  /**
   * URL to package homepage.
   */
  homepage?: string | null

  /**
   * Private mappings that only apply to import specifiers from within the
   * package itself.
   *
   * @see {@linkcode Imports}
   */
  imports?: Imports | null

  /**
   * Keywords associated with the package.
   */
  keywords?: string[] | null

  /**
   * Package license.
   *
   * Must be one of the following:
   *
   * - A valid [SPDX license identifier][1] if using a standard license
   * - A valid [SPDX license expression][2] if using multiple standard licenses
   * - A `SEE LICENSE IN <filename>` string that points to a `<filename>` in the
   *   top level of the package if using a non-standard license
   * - An `UNLICENSED` string to **not** grant others the right to use a private
   *   or unpublished package under any terms
   *
   * > 👉 **Note**: Using an Open Source ([OSI-approved][3]) license is
   * > encouraged unless there is a specific reason not to.
   *
   * [1]: https://spdx.org/licenses/
   * [2]: https://spdx.github.io/spdx-spec/v2-draft/SPDX-license-expressions/
   * [3]: https://opensource.org/licenses/alphabetical
   */
  license?: string | null

  /**
   * Package licenses.
   *
   * @see {@linkcode LicenseInfo}
   */
  licenses?: LicenseInfo[] | null

  /**
   * Module id of primary entry point to package.
   */
  main?: string | null

  /**
   * People who maintain the package.
   *
   * @see {@linkcode People}
   */
  maintainers?: People | null

  /**
   * Filenames to put in place for the `man` program to find.
   */
  man?: string[] | string | null

  /**
   * ECMAScript module id of primary entry point to package.
   */
  module?: string | null

  /**
   * Package name.
   *
   * Rules:
   *
   * - Must be `<= 214 characters` (includes scope for scoped packages)
   * - Scoped package names can begin with a dot or an underscore; this is
   *   not permitted for names without a scope
   * - Cannot contain uppercase letters
   * - Cannot contain any non-URL-safe characters
   */
  name?: string | null

  /**
   * Dependencies that are skipped if they fail to install.
   *
   * @see {@linkcode OptionalDependencies}
   */
  optionalDependencies?: OptionalDependencies | null

  /**
   * Operating systems the package runs on.
   *
   * @see {@linkcode OS}
   */
  os?: OS[] | null

  /**
   * Package manager that is expected to be used when developing the package.
   *
   * @see {@linkcode PackageManager}
   */
  packageManager?: PackageManager | null

  /**
   * Dependencies that should be installed via package user or another
   * dependency.
   *
   * @see {@linkcode PeerDependencies}
   */
  peerDependencies?: PeerDependencies | null

  /**
   * Map, where each key is a peer dependency, and each value is metadata for
   * the dependency.
   *
   * @see {@linkcode PeerDependenciesMeta}
   */
  peerDependenciesMeta?: PeerDependenciesMeta | null

  /**
   * Prevent package from being published.
   */
  private?: boolean | null

  /**
   * Set of configuration values to use when package is published.
   *
   * @see {@linkcode PublishConfig}
   */
  publishConfig?: PublishConfig | null

  /**
   * Relative path to `README`.
   */
  readme?: string | null

  /**
   * Source code location.
   *
   * @see {@linkcode RepositoryInfo}
   */
  repository?: RepositoryInfo | string | null

  /**
   * Package lifecycle scripts.
   *
   * @see {@linkcode Scripts}
   */
  scripts?: Scripts | null

  /**
   * Boolean indicating if package has side-effects, or an array of relative
   * paths to files that have side-effects. These files should not be removed
   * if tree shaking (dead code removal) is performed on the package.
   *
   * A "side effect" is defined as code that performs a special behavior when
   * imported, other than exposing one or more exports (i.e. polyfills, which
   * affect the global scope and usually do not provide an export).
   */
  sideEffects?: string[] | boolean | null

  /**
   * Module format used by Node.js when `.js` files are imported from the
   * package.
   *
   * @see {@linkcode PackageType}
   */
  type?: PackageType | null

  /**
   * Relative path to TypeScript declaration file for package.
   */
  types?: string | null

  /**
   * TypeScript version selection map.
   *
   * @see {@linkcode TypesVersions}
   */
  typesVersions?: TypesVersions | null

  /**
   * Alias for {@linkcode types}.
   */
  typings?: string | null

  /**
   * Package version.
   *
   * Must be parseable by [`node-semver`][semver], which is bundled with npm.
   *
   * To use standalone, run `npm i -D semver` or `yarn add -D semver`.
   *
   * [semver]: https://npmjs.com/package/semver
   */
  version?: SemanticVersion | null

  /**
   * Workspaces configuration.
   *
   * @see {@linkcode WorkspacesConfig}
   */
  workspaces?: WorkspacesConfig | string[] | null
}

export type { PackageJson as default }
