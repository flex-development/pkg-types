/**
 * @file Unit Tests - PackageJson
 * @module pkg-types/interfaces/tests/PackageJson
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
import type DependencyMap from '../dependency-map'
import type Directories from '../directories'
import type TestSubject from '../package-json'
import type PublishConfig from '../publish-config'
import type Scripts from '../scripts'

describe('unit:interfaces/PackageJson', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should have property [_id?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('_id')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [author?: Person | string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('author')
      .toEqualTypeOf<Person | string | undefined>()
  })

  it('should have property [bin?: Bin]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bin')
      .toEqualTypeOf<Bin | undefined>()
  })

  it('should have property [browser?: Browser]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('browser')
      .toEqualTypeOf<Browser | undefined>()
  })

  it('should have property [bugs?: Bugs | string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bugs')
      .toEqualTypeOf<Bugs | string | undefined>()
  })

  it('should have property [bundleDependencies?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bundleDependencies')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [bundledDependencies?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bundledDependencies')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [config?: JsonObject]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('config')
      .toEqualTypeOf<JsonObject | undefined>()
  })

  it('should have property [contributors?: (Person | string)[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('contributors')
      .toEqualTypeOf<(Person | string)[] | undefined>()
  })

  it('should have property [cpu?: CPU[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cpu')
      .toEqualTypeOf<CPU[] | undefined>()
  })

  it('should have property [dependencies?: DependencyMap<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dependencies')
      .toEqualTypeOf<DependencyMap<string> | undefined>()
  })

  it('should have property [dependenciesMeta?: DependencyMap<DependencyMeta>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dependenciesMeta')
      .toEqualTypeOf<DependencyMap<DependencyMeta> | undefined>()
  })

  it('should have property [devDependencies?: DependencyMap<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('devDependencies')
      .toEqualTypeOf<DependencyMap<string> | undefined>()
  })

  it('should have property [description?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('description')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [directories?: Directories]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('directories')
      .toEqualTypeOf<Directories | undefined>()
  })

  it('should have property [engineStrict?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('engineStrict')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [engines?: Engines]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('engines')
      .toEqualTypeOf<Engines | undefined>()
  })

  it('should have property [exports?: Exports]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exports')
      .toEqualTypeOf<Exports | undefined>()
  })

  it('should have property [files?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('files')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [funding?: OneOrMany<FundingInfo> | string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('funding')
      .toEqualTypeOf<OneOrMany<FundingInfo> | string | undefined>()
  })

  it('should have property [homepage?: LiteralUnion<".", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('homepage')
      .toEqualTypeOf<LiteralUnion<'.', string> | undefined>()
  })

  it('should have property [imports?: Imports]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('imports')
      .toEqualTypeOf<Imports | undefined>()
  })

  it('should have property [installConfig?: InstallConfig]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('installConfig')
      .toEqualTypeOf<InstallConfig | undefined>()
  })

  it('should have property [jspm?: PackageJson]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jspm')
      .toEqualTypeOf<TestSubject | undefined>()
  })

  it('should have property [keywords?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('keywords')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [languageName?: LiteralUnion<"node", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('languageName')
      .toEqualTypeOf<LiteralUnion<'node', string> | undefined>()
  })

  it('should have property [libc?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('libc')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should have property [license?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('license')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [licenses?: LicenseObject[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('licenses')
      .toEqualTypeOf<LicenseObject[] | undefined>()
  })

  it('should have property [main?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [maintainers?: (Person | string)[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('maintainers')
      .toEqualTypeOf<(Person | string)[] | undefined>()
  })

  it('should have property [man?: OneOrMany<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('man')
      .toEqualTypeOf<OneOrMany<string> | undefined>()
  })

  it('should have property [module?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [name?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [optionalDependencies?: DependencyMap<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optionalDependencies')
      .toEqualTypeOf<DependencyMap<string> | undefined>()
  })

  it('should have property [os?: OS[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('os')
      .toEqualTypeOf<OS[] | undefined>()
  })

  it('should have property [packageManager?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('packageManager')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [peerDependencies?: DependencyMap<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('peerDependencies')
      .toEqualTypeOf<DependencyMap<string> | undefined>()
  })

  it('should have property [peerDependenciesMeta?: DependencyMap<PeerDependencyMeta>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('peerDependenciesMeta')
      .toEqualTypeOf<DependencyMap<PeerDependencyMeta> | undefined>()
  })

  it('should have property [preferGlobal?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preferGlobal')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [preferUnplugged?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preferUnplugged')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [private?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('private')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should have property [publishConfig?: PublishConfig]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('publishConfig')
      .toEqualTypeOf<PublishConfig | undefined>()
  })

  it('should have property [readme?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('readme')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [repository?: Repository | string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('repository')
      .toEqualTypeOf<Repository | string | undefined>()
  })

  it('should have property [resolutions?: DependencyMap<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolutions')
      .toEqualTypeOf<DependencyMap<string> | undefined>()
  })

  it('should have property [scripts?: Scripts]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('scripts')
      .toEqualTypeOf<Scripts | undefined>()
  })

  it('should have property [sideEffects?: string[] | boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sideEffects')
      .toEqualTypeOf<string[] | boolean | undefined>()
  })

  it('should have property [type?: Type]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Type | undefined>()
  })

  it('should have property [types?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [typesVersions?: TypesVersions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typesVersions')
      .toEqualTypeOf<TypesVersions | undefined>()
  })

  it('should have property [typings?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typings')
      .toEqualTypeOf<string | undefined>()
  })

  it('should have property [version?: LiteralUnion<SemanticVersion, string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('version')
      .toEqualTypeOf<LiteralUnion<SemanticVersion, string> | undefined>()
  })

  it('should have property [workspaces?: string[] | WorkspacesConfig]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('workspaces')
      .toEqualTypeOf<string[] | WorkspacesConfig | undefined>()
  })
})
