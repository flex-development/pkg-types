# pkg-types

[![github release](https://img.shields.io/github/v/release/flex-development/pkg-types.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/pkg-types/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/pkg-types.svg)](https://npmjs.com/package/@flex-development/pkg-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/pkg-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

[TypeScript][] definitions for `package.json`

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package contains TypeScript definitions for `package.json` files and values used in `package.json` files.

## Install

In Node.js with [yarn][]:

```sh
yarn add @flex-development/pkg-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

## Use

```ts
import type {
  Condition,
  ConditionMap,
  ExportConditions,
  Exports,
  ExportsKey,
  ExportsList,
  ExportsObject,
  ImportConditions,
  Imports,
  ImportsKey,
  PackageJson,
  PackageType,
  SubpathExports
} from '@flex-development/pkg-types'
```

## API

- [`Access`](./src/access.ts)
- [`Bin`](./src/bin.ts)
- [`BinObject`](./src/bin-object.ts)
- [`Browser`](./src/browser.ts)
- [`BrowserObject`](./src/browser-object.ts)
- [`Bugs`](./src/bugs.ts)
- [`Condition`](./src/condition.ts)
- [`ConditionMap`](./src/condition-map.ts)
- [`Config`](./src/config.ts)
- [`CPU`](./src/cpu.ts)
- [`CPUMap`](./src/cpu-map.ts)
- [`Dependencies`](./src/dependencies.ts)
- [`DevDependencies`](./src/dev-dependencies.ts)
- [`Directories`](./src/directories.ts)
- [`Engine`](./src/engine.ts)
- [`EngineMap`](./src/engine-map.ts)
- [`Engines`](./src/engines.ts)
- [`ExportConditions`](./src/export-conditions.ts)
- [`Exports`](./src/exports.ts)
- [`ExportsKey`](./src/exports-key.ts)
- [`ExportsList`](./src/exports-list.ts)
- [`ExportsObject`](./src/exports-object.ts)
- [`ImportConditions`](./src/import-conditions.ts)
- [`Imports`](./src/imports.ts)
- [`ImportsKey`](./src/imports-key.ts)
- [`JsonArray`](./src/json-array.ts)
- [`JsonObject`](./src/json-object.ts)
- [`JsonPrimitive`](./src/json-primitive.ts)
- [`JsonValue`](./src/json-value.ts)
- [`LicenseInfo`](./src/license-info.ts)
- [`OptionalDependencies`](./src/optional-dependencies.ts)
- [`OS`](./src/os.ts)
- [`OSMap`](./src/os-map.ts)
- [`PackageJson`](./src/package-json.ts)
- [`PackageManager`](./src/package-manager.ts)
- [`PackageManagerMap`](./src/package-manager-map.ts)
- [`PackageType`](./src/package-type.ts)
- [`PeerDependencies`](./src/peer-dependencies.ts)
- [`PeerDependenciesMeta`](./src/peer-dependencies-meta.ts)
- [`PeerDependencyMetadata`](./src/peer-dependency-metadata.ts)
- [`People`](./src/people.ts)
- [`Person`](./src/person.ts)
- [`PublishConfig`](./src/publish-config.ts)
- [`RepositoryInfo`](./src/repository-info.ts)
- [`RepositoryType`](./src/repository-type.ts)
- [`RepositoryTypeMap`](./src/repository-type-map.ts)
- [`Scripts`](./src/scripts.ts)
- [`SemanticVersion`](./src/semantic-version.ts)
- [`SubpathExports`](./src/subpath-exports.ts)
- [`TypesVersions`](./src/types-versions.ts)
- [`WorkspacesConfig`](./src/workspaces-config.ts)

## Related

- [`tsconfig-types`][tsconfig-types] — TypeScript definitions for `tsconfig.json`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[tsconfig-types]: https://github.com/flex-development/tsconfig-types

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
