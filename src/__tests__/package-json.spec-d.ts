/**
 * @file Unit Tests - PackageJson
 * @module pkg-types/tests/unit-d/PackageJson
 */

import type TestSubject from '#lib/package-json'
import type {
  Bin,
  Browser,
  Bugs,
  Config,
  CPU,
  Dependencies,
  DevDependencies,
  Directories,
  Engines,
  Exports,
  Imports,
  JsonObject,
  LicenseInfo,
  OptionalDependencies,
  OS,
  PackageManager,
  PackageType,
  PeerDependencies,
  PeerDependenciesMeta,
  People,
  Person,
  PublishConfig,
  RepositoryInfo,
  Scripts,
  SemanticVersion,
  TypesVersions,
  WorkspacesConfig
} from '@flex-development/pkg-types'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:PackageJson', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [_id?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_id')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [author?: Person | string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('author')
      .toEqualTypeOf<Nilable<Person | string>>()
  })

  it('should match [bin?: Bin | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bin')
      .toEqualTypeOf<Nilable<Bin>>()
  })

  it('should match [browser?: Browser | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Nilable<Browser>>()
  })

  it('should match [bugs?: Bugs | string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bugs')
      .toEqualTypeOf<Nilable<Bugs | string>>()
  })

  it('should match [bundleDependencies?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bundleDependencies')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [bundledDependencies?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bundledDependencies')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [config?: Config | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('config')
      .toEqualTypeOf<Nilable<Config>>()
  })

  it('should match [contributors?: People | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('contributors')
      .toEqualTypeOf<Nilable<People>>()
  })

  it('should match [cpu?: CPU[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cpu')
      .toEqualTypeOf<Nilable<CPU[]>>()
  })

  it('should match [dependencies?: Dependencies | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dependencies')
      .toEqualTypeOf<Nilable<Dependencies>>()
  })

  it('should match [devDependencies?: DevDependencies | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('devDependencies')
      .toEqualTypeOf<Nilable<DevDependencies>>()
  })

  it('should match [description?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('description')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [directories?: Directories | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('directories')
      .toEqualTypeOf<Nilable<Directories>>()
  })

  it('should match [engineStrict?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('engineStrict')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [engines?: Engines | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('engines')
      .toEqualTypeOf<Nilable<Engines>>()
  })

  it('should match [exports?: Exports]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exports')
      .toEqualTypeOf<Optional<Exports>>()
  })

  it('should match [files?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('files')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [homepage?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('homepage')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [imports?: Imports | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('imports')
      .toEqualTypeOf<Nilable<Imports>>()
  })

  it('should match [keywords?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('keywords')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [license?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('license')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [licenses?: LicenseInfo[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('licenses')
      .toEqualTypeOf<Nilable<LicenseInfo[]>>()
  })

  it('should match [main?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [maintainers?: People | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('maintainers')
      .toEqualTypeOf<Nilable<People>>()
  })

  it('should match [man?: string[] | string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('man')
      .toEqualTypeOf<Nilable<string[] | string>>()
  })

  it('should match [module?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [name?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [optionalDependencies?: OptionalDependencies | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optionalDependencies')
      .toEqualTypeOf<Nilable<OptionalDependencies>>()
  })

  it('should match [os?: OS[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('os')
      .toEqualTypeOf<Nilable<OS[]>>()
  })

  it('should match [packageManager?: PackageManager | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('packageManager')
      .toEqualTypeOf<Nilable<PackageManager>>()
  })

  it('should match [peerDependencies?: PeerDependencies | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('peerDependencies')
      .toEqualTypeOf<Nilable<PeerDependencies>>()
  })

  it('should match [peerDependenciesMeta?: PeerDependenciesMeta | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('peerDependenciesMeta')
      .toEqualTypeOf<Nilable<PeerDependenciesMeta>>()
  })

  it('should match [private?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('private')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [publishConfig?: PublishConfig | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('publishConfig')
      .toEqualTypeOf<Nilable<PublishConfig>>()
  })

  it('should match [readme?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('readme')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [repository?: RepositoryInfo | string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('repository')
      .toEqualTypeOf<Nilable<RepositoryInfo | string>>()
  })

  it('should match [scripts?: Scripts | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('scripts')
      .toEqualTypeOf<Nilable<Scripts>>()
  })

  it('should match [sideEffects?: string[] | boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sideEffects')
      .toEqualTypeOf<Nilable<string[] | boolean>>()
  })

  it('should match [type?: PackageType | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Nilable<PackageType>>()
  })

  it('should match [types?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [typesVersions?: TypesVersions | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typesVersions')
      .toEqualTypeOf<Nilable<TypesVersions>>()
  })

  it('should match [typings?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typings')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [version?: SemanticVersion | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('version')
      .toEqualTypeOf<Nilable<SemanticVersion>>()
  })

  it('should match [workspaces?: WorkspacesConfig | string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('workspaces')
      .toEqualTypeOf<Nilable<WorkspacesConfig | string[]>>()
  })
})
