# pkg-types

[![npm](https://img.shields.io/npm/v/@flex-development/pkg-types.svg)](https://npmjs.com/package/@flex-development/pkg-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/pkg-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![github actions](http://img.shields.io/badge/-github%20actions-2088ff?style=flat&logo=github-actions&logoColor=ffffff)](https://github.com/features/actions)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[TypeScript][1] definitions for `package.json`

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

```sh
yarn add @flex-development/pkg-types
```

From Git:

```sh
yarn add @flex-development/pkg-types@flex-development/pkg-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
import type { PackageJson } from '@flex-development/pkg-types'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Enables or disables [`type`][1] in `package.json`.
 *
 * [1]: https://nodejs.org/api/packages.html#type
 *
 * @example
 *  toggle()
 * @example
 *  toggle('off')
 * @example
 *  toggle('on')
 *
 * @param {'off' | 'on'} [command] - Toggle command
 * @return {void} Nothing when complete
 */
function toggle(command?: 'off' | 'on'): void {
  // see: https://yarnpkg.com/advanced/lifecycle-scripts#environment-variables
  const { npm_package_json = 'package.json' } = process.env

  /**
   * Absolute path to `package.json`.
   *
   * @const {string} pkgfile
   */
  const pkgfile: string = path.resolve(npm_package_json)

  /**
   * `package.json` data.
   *
   * @var {PackageJson} pkg
   */
  let pkg: PackageJson = JSON.parse(fs.readFileSync(pkgfile, 'utf8'))

  // toggle package type
  pkg = Object.keys(pkg).reduce<PackageJson>((acc, key) => {
    const [, type, prefix = ''] = /^((#?)type)$/.exec(key) ?? []

    if (type) {
      key = command
        ? `${command === 'off' ? '#' : ''}type`
        : prefix
        ? type.replace(new RegExp('^' + prefix), '')
        : '#' + type

      acc[key] = pkg[type]!
    } else {
      acc[key] = pkg[key]!
    }

    return acc
  }, {})

  // rewrite package.json
  return void fs.writeFileSync(pkgfile, JSON.stringify(pkg, null, 2) + '\n')
}

export default toggle
```

Need this functionality? See [`toggle-pkg-type`][2] :blush:

## API

### Interfaces

- [`DependencyMap`](src/interfaces/dependency-map.ts)
- [`Directories`](src/interfaces/directories.ts)
- [`PackageJson`](src/interfaces/package-json.ts)
- [`PublishConfig`](src/interfaces/publish-config.ts)
- [`Scripts`](src/interfaces/scripts.ts)

### Types

- [`Access`](src/types/access.ts)
- [`Bin`](src/types/bin.ts)
- [`Browser`](src/types/browser.ts)
- [`Bugs`](src/types/bugs.ts)
- [`CPU`](src/types/cpu.ts)
- [`DependencyMeta`](src/types/dependency-meta.ts)
- [`Engine`](src/types/engine.ts)
- [`Engines`](src/types/engines.ts)
- [`ExportCondition`](src/types/export-condition.ts)
- [`ExportConditions`](src/types/export-conditions.ts)
- [`Exports`](src/types/exports.ts)
- [`FundingInfo`](src/types/funding-info.ts)
- [`FundingType`](src/types/funding-type.ts)
- [`HoistingLimits`](src/types/hoisiting-limits.ts)
- [`ImportsKey`](src/types/imports-key.ts)
- [`Imports`](src/types/imports.ts)
- [`InstallConfig`](src/types/install-config.ts)
- [`LicenseObject`](src/types/license-object.ts)
- [`OS`](src/types/os.ts)
- [`PeerDependencyMeta`](src/types/peer-dependency-meta.ts)
- [`Person`](src/types/person.ts)
- [`Registry`](src/types/registry.ts)
- [`Repository`](src/types/repository.ts)
- [`SemanticVersion`](src/types/semantic-version.ts)
- [`Type`](src/types/type.ts)
- [`TypesVersions`](src/types/types-versions.ts)
- [`WorkspacesConfig`](src/types/workspaces-config.ts)

## Related

- [`tsconfig-types`][3] &mdash; TypeScript definitions for `tsconfig.json`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://typescriptlang.org/
[2]: https://github.com/flex-development/toggle-pkg-type
[3]: https://github.com/flex-development/tsconfig-types
