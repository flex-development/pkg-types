/**
 * @file Interfaces - PackageJson
 * @module pkg-types/interfaces/PackageJson
 */

import type {
  Bin,
  Browser,
  Bugs,
  CPU,
  DependencyMeta,
  Engines,
  Exports,
  FundingInfo,
  Imports,
  InstallConfig,
  LicenseObject,
  OS,
  PeerDependencyMeta,
  Person,
  Repository,
  SemanticVersion,
  Type,
  TypesVersions,
  WorkspacesConfig
} from '#src/types'
import type {
  JsonObject,
  LiteralUnion,
  OneOrMany
} from '@flex-development/tutils'
import type DependencyMap from './dependency-map'
import type Directories from './directories'
import type PublishConfig from './publish-config'
import type Scripts from './scripts'

/**
 * Package manifest.
 *
 * @see https://docs.npmjs.com/cli/configuring-npm/package-json
 * @see https://yarnpkg.com/configuration/manifest
 *
 * @extends {JsonObject}
 */
interface PackageJson extends JsonObject {
  /**
   * Package id.
   *
   * Typically of the format `<package-name>@<package-version>`.
   */
  _id?: string

  /**
   * Person who created the package.
   */
  author?: Person | string

  /**
   * Executable files to install into `PATH`.
   */
  bin?: Bin

  /**
   * Hint to JavaScript bundlers or component tools when packaging modules for
   * client side use.
   */
  browser?: Browser

  /**
   * Issue tracker URL or object containing issue tracker URL and/or the email
   * address to which issues should be reported.
   */
  bugs?: Bugs | string

  /**
   * Names of packages that will be bundled when package is published.
   */
  bundleDependencies?: string[]

  /**
   * Alias for {@linkcode bundleDependencies}.
   */
  bundledDependencies?: string[]

  /**
   * Configuration parameters used in package scripts.
   */
  config?: JsonObject

  /**
   * People who contributed to the package.
   */
  contributors?: (Person | string)[]

  /**
   * CPU architectures the package runs on.
   */
  cpu?: CPU[]

  /**
   * Packages required for the package to function properly.
   */
  dependencies?: DependencyMap<string>

  /**
   * Metadata related to the dependencies listed in {@linkcode dependencies} and
   * {@linkcode devDependencies}.
   *
   * @see https://yarnpkg.com/configuration/manifest#dependenciesMeta
   *
   * @packageManager yarn
   */
  dependenciesMeta?: DependencyMap<DependencyMeta>

  /**
   * Dependencies used during package development only.
   *
   * These dependencies are not required for the package to function properly.
   */
  devDependencies?: DependencyMap<string>

  /**
   * Package description.
   */
  description?: string

  /**
   * Package structure indicator.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
   * @see https://classic.yarnpkg.com/en/docs/package-json#toc-directories
   * @see https://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout
   */
  directories?: Directories

  /**
   * Enforce {@linkcode engines}.
   *
   * @deprecated
   */
  engineStrict?: boolean

  /**
   * Engines the package runs on.
   */
  engines?: Engines

  /**
   * Package entry points, optionally with conditions and subpath exports.
   *
   * @see https://nodejs.org/api/packages.html#exports
   */
  exports?: Exports

  /**
   * Files included in published package, or glob patterns matching included
   * files.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
   * @see https://yarnpkg.com/configuration/manifest#files
   */
  files?: string[]

  /**
   * Enforce one version of a given dependency.
   *
   * @see https://classic.yarnpkg.com/en/docs/package-json#toc-flat
   *
   * @packageManager yarn
   */
  flat?: boolean

  /**
   * Monetary support information.
   */
  funding?: OneOrMany<FundingInfo> | string

  /**
   * URL to package homepage.
   */
  homepage?: LiteralUnion<'.', string>

  /**
   * Private mappings that only apply to import specifiers from within the
   * package itself.
   *
   * @see https://nodejs.org/api/packages.html#subpath-imports
   */
  imports?: Imports

  /**
   * Yarn workspace install configuration.
   *
   * @see https://yarnpkg.com/configuration/manifest#installConfig
   *
   * @packageManager yarn
   */
  installConfig?: InstallConfig

  /**
   * [JSPM][1] configuration.
   *
   * [1]: https://jspm.org/
   */
  jspm?: PackageJson

  /**
   * Keywords associated with the package.
   */
  keywords?: string[]

  /**
   * The "language" of the package (eg. `'node'`), for use with multi-linkers.
   *
   * @see https://yarnpkg.com/configuration/manifest#languageName
   *
   * @experimental
   * @packageManager yarn
   */
  languageName?: LiteralUnion<'node', string>

  /**
   * C libraries the package runs on.
   *
   * @packageManager yarn
   */
  libc?: string[]

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
   * **Note**: Using an Open Source ([OSI-approved][3]) license is encouraged
   * unless there is a specific reason not to.
   *
   * [1]: https://spdx.org/licenses/
   * [2]: https://spdx.github.io/spdx-spec/v2-draft/SPDX-license-expressions/
   * [3]: https://opensource.org/licenses/alphabetical
   */
  license?: string

  /**
   * Package licenses.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
   *
   * @deprecated Use {@linkcode license} instead
   * @packageManager npm
   */
  licenses?: LicenseObject[]

  /**
   * Module ID that is the primary entry point to the package.
   */
  main?: string

  /**
   * People who maintain the package.
   */
  maintainers?: (Person | string)[]

  /**
   * Filenames to put in place for the `man` program to find.
   */
  man?: OneOrMany<string>

  /**
   * ECMAScript module ID that is the primary entry point to the package.
   */
  module?: string

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
  name?: string

  /**
   * Dependencies that are skipped if they fail to install.
   *
   * **Note**: Unless the package depends on `fsevents`, this field is usually
   * not needed. If a package should only be required when a specific feature is
   * used, an optional peer dependency should be declared instead
   * ({@linkcode peerDependencies} and {@linkcode peerDependenciesMeta}).
   */
  optionalDependencies?: DependencyMap<string>

  /**
   * Operating systems the package runs on.
   */
  os?: OS[]

  /**
   * Package manager that is expected to be used when developing the package.
   *
   * **Note**: Can be set to any [supported package manager][1] to ensure that
   * teams use the same package manager versions without having to install
   * anything other than Node.js.
   *
   * [1]: https://nodejs.org/api/corepack.html#supported-package-managers
   */
  packageManager?: string

  /**
   * Dependencies that should be installed by package user or via another
   * dependency.
   */
  peerDependencies?: DependencyMap<string>

  /**
   * {@linkcode peerDependencies} metadata.
   */
  peerDependenciesMeta?: DependencyMap<PeerDependencyMeta>

  /**
   * Show warning if package is installed locally.
   *
   * @deprecated
   * @packageManager npm
   */
  preferGlobal?: boolean

  /**
   * Instruct Yarn to either force-extract its content on the disk or to stay
   * within its archive.
   *
   * @see https://yarnpkg.com/configuration/manifest#preferUnplugged
   *
   * @packageManager yarn
   */
  preferUnplugged?: boolean

  /**
   * Prevent package from being published.
   */
  private?: boolean

  /**
   * Set of configuration values to use when package is published.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
   * @see https://yarnpkg.com/configuration/manifest#publishConfig
   */
  publishConfig?: PublishConfig

  /**
   * Relative path to `README`.
   */
  readme?: string

  /**
   * Source code location.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
   */
  repository?: Repository | string

  /**
   * Selective version resolutions.
   *
   * @see https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-selective-versions-resolutions.md
   *
   * @packageManager yarn
   */
  resolutions?: DependencyMap<string>

  /**
   * Package lifecycle scripts.
   *
   * @see https://docs.npmjs.com/cli/using-npm/scripts
   * @see https://yarnpkg.com/advanced/lifecycle-scripts
   * @see https://classic.yarnpkg.com/en/docs/package-json#toc-scripts
   */
  scripts?: Scripts

  /**
   * Boolean indicating if package has side-effects, or an array of relative
   * paths to files that have side-effects. These files should not be removed
   * if tree shaking (dead code removal) is performed on the package.
   *
   * A "side effect" is defined as code that performs a special behavior when
   * imported, other than exposing one or more exports (i.e. polyfills, which
   * affect the global scope and usually do not provide an export).
   */
  sideEffects?: string[] | boolean

  /**
   * Module format used by Node.js when `.js` files are imported from the
   * package.
   *
   * @see https://nodejs.org/api/packages.html#type
   * @see https://nodejs.org/api/esm.html#esm_package_json_type_field
   */
  type?: Type

  /**
   * Relative path to TypeScript declaration file for package.
   */
  types?: string

  /**
   * TypeScript version selection map.
   *
   * @see https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions
   */
  typesVersions?: TypesVersions

  /**
   * Alias for {@linkcode types}.
   */
  typings?: string

  /**
   * Package version.
   *
   * Must be parseable by [`node-semver`][1], which is bundled with npm.
   *
   * To use standalone, run `npm i -D semver` or `yarn add -D semver`.
   *
   * [1]: https://npmjs.com/package/semver
   */
  version?: LiteralUnion<SemanticVersion, string>

  /**
   * Workspaces configuration.
   *
   * @see https://classic.yarnpkg.com/docs/workspaces
   * @see https://yarnpkg.com/features/workspaces
   * @see https://github.com/npm/rfcs/blob/main/implemented/0026-workspaces.md
   */
  workspaces?: string[] | WorkspacesConfig
}

export type { PackageJson as default }
