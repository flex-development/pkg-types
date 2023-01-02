## [2.0.0](https://github.com/flex-development/pkg-types/compare/1.0.0...2.0.0) (2023-01-02)


### ⚠ BREAKING CHANGES

* **exports:** add subpaths `"."` and `"./package.json"`

### :package: Build

* **deps-dev:** Bump lint-staged from 13.0.4 to 13.1.0 ([#4](https://github.com/flex-development/pkg-types/issues/4)) ([0948ea5](https://github.com/flex-development/pkg-types/commit/0948ea5f93d22061448ed8e0516f0b9dce2d2333))
* **exports:** add subpaths `"."` and `"./package.json"` ([2f5dad0](https://github.com/flex-development/pkg-types/commit/2f5dad08c4362639dce2db12c0e7fb49e7b22cee))
* **yarn:** bump yarn from 4.0.0-rc.14 to 4.0.0-rc.34 ([8ccaf59](https://github.com/flex-development/pkg-types/commit/8ccaf590152118a8ce5c288e8fef90b31cff9d76))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] fix npm package-ecosystem x yarn integration ([c18e3e2](https://github.com/flex-development/pkg-types/commit/c18e3e278a5821e8990c9aba25c7cab9f5884743))
* **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#3](https://github.com/flex-development/pkg-types/issues/3)) ([63aa69d](https://github.com/flex-development/pkg-types/commit/63aa69dade88d24862b7b350a235345cb330effc))
* **deps:** Bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#2](https://github.com/flex-development/pkg-types/issues/2)) ([eefa23e](https://github.com/flex-development/pkg-types/commit/eefa23ee8898a4bc1e209d58e715706c3cf790a0))
* **workflows:** [`add-to-project`] add items from repo admin account ([21ca38b](https://github.com/flex-development/pkg-types/commit/21ca38b4918db3752f0c19549c313d26f854ba1a))
* **workflows:** [`publish`] cleanup registry scope ([9e89b98](https://github.com/flex-development/pkg-types/commit/9e89b98b59bf290d42996f9ceefb3f4484701b34))
* **workflows:** [`publish`] use node version file ([caf9cff](https://github.com/flex-development/pkg-types/commit/caf9cfff30c8f42892c533b700982ab44e42626b))
* **workflows:** [`typescript`] add typescript workflow ([f169f70](https://github.com/flex-development/pkg-types/commit/f169f7080f32a099997a6de2e30bae9bfb3de05f))


### :pencil: Documentation

* add "contributor covenant code of conduct" ([30019d2](https://github.com/flex-development/pkg-types/commit/30019d25c484141dcd096cb8a16735acad2a6ae1))


### :bug: Fixes

* **install:** [git] make `postinstall` script work with git install ([99ce5e0](https://github.com/flex-development/pkg-types/commit/99ce5e0126b5e0a337ed3ed6297145f7b2a76b07))


### :house_with_garden: Housekeeping

* update project architecture ([a7de0af](https://github.com/flex-development/pkg-types/commit/a7de0af123b97baf01a78d4f8d3f175fd6670709))
* **github:** add "package manager" dropdown to bug report template ([78e41eb](https://github.com/flex-development/pkg-types/commit/78e41eb945ebbe6c5fc190a2cfdaa791d9d07726))
* **github:** add "typescript version" input to bug report template ([d7edc57](https://github.com/flex-development/pkg-types/commit/d7edc5712ca944ad73eea497e0b48b250ae91120))
* **github:** add commit scope `exports` ([86d5ab9](https://github.com/flex-development/pkg-types/commit/86d5ab9ecd2c6c9aaad1a93d108da153a3605f37))
* **github:** add commit scope `install` ([dd4f9db](https://github.com/flex-development/pkg-types/commit/dd4f9dbc7b82d062c506ba9a6eb85a827b9ef5cf))
* **github:** add label `scope:install` ([6d67de7](https://github.com/flex-development/pkg-types/commit/6d67de7459cfaa7ac013ce74af197a81f20d0b3a))
* **github:** add label `status:triaged` ([35bb58c](https://github.com/flex-development/pkg-types/commit/35bb58c8492d8cd35e0671045779a105ff2b81ea))
* **vscode:** update settings ([358a6f6](https://github.com/flex-development/pkg-types/commit/358a6f68a59ce385dc3d3ae8d6891b188b418aae))

## 1.0.0 (2022-12-03)


### :pencil: Documentation

* api ([1e27965](https://github.com/flex-development/pkg-types/commit/1e27965a584458a3bd439b6c07aa6dfd6a38d228))
* fix `WorkspacesConfig` description ([8166f6f](https://github.com/flex-development/pkg-types/commit/8166f6f42f5b8fb4a11e3a508e2f2afe6d459927))
* fix npm links ([47c7564](https://github.com/flex-development/pkg-types/commit/47c75642cfcbe5d6a0e71027822f880deeb283fd))
* related ([226746d](https://github.com/flex-development/pkg-types/commit/226746d5f36317dc816d61ec00f2fc2462903c69))
* use ([653d014](https://github.com/flex-development/pkg-types/commit/653d01460f3d7690b55522238633d027052f4933))


### :sparkles: Features

* **interfaces:** `DependencyMap` ([50a80ee](https://github.com/flex-development/pkg-types/commit/50a80eebe477d5050d8686d5d2d9055771edb86c))
* **interfaces:** `Directories` ([0387945](https://github.com/flex-development/pkg-types/commit/038794558af7917833d991bdff582e0c0ea9c3fd))
* **interfaces:** `PackageJson` ([7b06924](https://github.com/flex-development/pkg-types/commit/7b0692467157dace1ddebc65d4b4d0394d01877b))
* **interfaces:** `PublishConfig` ([a530f4f](https://github.com/flex-development/pkg-types/commit/a530f4f06a35f700bb1eca9eea92183803c5e930))
* **interfaces:** `Scripts` ([b9db53b](https://github.com/flex-development/pkg-types/commit/b9db53bcf84b5e801705de5506725c02438b846a))
* **types:** `Access` ([6b08cbf](https://github.com/flex-development/pkg-types/commit/6b08cbfe9bd568098efa6ed6ff9a5202c0c26eae))
* **types:** `Bin` ([9035563](https://github.com/flex-development/pkg-types/commit/9035563987c3dfafe1d4dd6523f1e059f97cb3e0))
* **types:** `Browser` ([fe8409e](https://github.com/flex-development/pkg-types/commit/fe8409ea08d27992f114a1755ce4d254eeb8bcd7))
* **types:** `BugsObject` ([28d68fd](https://github.com/flex-development/pkg-types/commit/28d68fdc2e3808fe5f610050e46a1b8a4f03a03a))
* **types:** `CPU` ([46a3251](https://github.com/flex-development/pkg-types/commit/46a32514e6bdec8ff33baf5e6dd19573a2b8f079))
* **types:** `DependencyMeta` ([39df145](https://github.com/flex-development/pkg-types/commit/39df1454b082e63f93ec60ca3ae597d89eed9907))
* **types:** `Engine` ([42e1979](https://github.com/flex-development/pkg-types/commit/42e1979c77309c2eadf6dccf454b9b58f8e92169))
* **types:** `Engines` ([9a09e62](https://github.com/flex-development/pkg-types/commit/9a09e62aa032590c95737d56d308e669e9964789))
* **types:** `ExportCondition` ([e6e4cd5](https://github.com/flex-development/pkg-types/commit/e6e4cd5dbc796ced7cdde503b5be6574ff7aca1d))
* **types:** `ExportConditions`, `Exports` ([22c207e](https://github.com/flex-development/pkg-types/commit/22c207ec009db4c0015c1a568a8e957054a1e797))
* **types:** `FundingObject` ([e467bfc](https://github.com/flex-development/pkg-types/commit/e467bfc421b95c47feb3d677b0fa2b759bdb38f4))
* **types:** `FundingType` ([949a2c0](https://github.com/flex-development/pkg-types/commit/949a2c0e4006c69e3f7d567ba7dfbda8adf32040))
* **types:** `HoistingLimits` ([3661d84](https://github.com/flex-development/pkg-types/commit/3661d843433108f3a0a71603bc765a5b43b3a402))
* **types:** `ImportsKey` ([14a69ec](https://github.com/flex-development/pkg-types/commit/14a69ecb766bc0d25da4864c921069aa30d66ce6))
* **types:** `Imports` ([cc68844](https://github.com/flex-development/pkg-types/commit/cc68844ee4ba978ee370a30001783a0bdecb7e28))
* **types:** `InstallConfig` ([ef89d52](https://github.com/flex-development/pkg-types/commit/ef89d525a38cf37c8e21d9cfbe82f74b20be4a55))
* **types:** `LicenseObject` ([ec81ecd](https://github.com/flex-development/pkg-types/commit/ec81ecde6fe28f2b09664bda6d0b5539e57fb25e))
* **types:** `OS` ([a6b42c7](https://github.com/flex-development/pkg-types/commit/a6b42c7aa4a99596a84f831a14bf795365b59119))
* **types:** `PeerDependencyMeta` ([78a4cbd](https://github.com/flex-development/pkg-types/commit/78a4cbdf23eb07c8687e72233731f6cc9e9a0d06))
* **types:** `Person` ([9be7e97](https://github.com/flex-development/pkg-types/commit/9be7e978e50fb2a4891f98a7dafc90ffb00a2923))
* **types:** `Registry` ([70f8c93](https://github.com/flex-development/pkg-types/commit/70f8c931675941bb676d1570b9a0fb6792f601e4))
* **types:** `Repository` ([b337b40](https://github.com/flex-development/pkg-types/commit/b337b4089479164418628d0f40bd46ac8c7198a0))
* **types:** `SemanticVersion` ([c8d0884](https://github.com/flex-development/pkg-types/commit/c8d0884f035f6e4892730b6aa73b9b49756a8046))
* **types:** `Type` ([94ce708](https://github.com/flex-development/pkg-types/commit/94ce708e5b6cbbb2dbdb33966387c6a2b59cef02))
* **types:** `TypesVersions` ([ffd3e52](https://github.com/flex-development/pkg-types/commit/ffd3e52c1dfc764531e7a367578267a133a3bf59))
* **types:** `WorkspacesConfig` ([154c209](https://github.com/flex-development/pkg-types/commit/154c20941b661c0227e4207ece4cf0c5e9484bc3))


### :house_with_garden: Housekeeping

* cleanup project architecture ([625d646](https://github.com/flex-development/pkg-types/commit/625d6466f772871f5f47183adfe73b9a9815a741))


### :zap: Refactors

* **ts:** ensure definitions are json-compatible ([63abb4a](https://github.com/flex-development/pkg-types/commit/63abb4aea401a1a8e24e2de51ba47104f188a266))
* **types:** `BugsObject` -> `Bugs` ([cc05dfb](https://github.com/flex-development/pkg-types/commit/cc05dfb3a65b6230b30b3b436e27e0b44efa3008))
* **types:** `FundingObject` -> `FundingInfo` ([ab8a328](https://github.com/flex-development/pkg-types/commit/ab8a32849011d78806f85760537b4aae063b2942))
