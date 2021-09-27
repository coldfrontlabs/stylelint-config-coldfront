# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.3](https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v2.0.2...v2.0.3) (2021-09-27)


### Build System

* **npm:** update all dependencies and build config ([12ae014](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/12ae014b976b3e4d659778b769a6486d3ff2d031))
* **npm:** update commit lint config ([ad002a0](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/ad002a02c60f31549be2b990632af14d3574b371))
* **npm:** update stylelint-config packages to latest ([2b414dc](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/2b414dc4bf0d0deb1226aed6cd372e82ee31bada))

### [2.0.2](https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v2.0.1...v2.0.2) (2020-09-15)


### Bug Fixes

* **rules:** ignore use and forward at rules ([27921c9](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/27921c99bbccc123548d54ca6ba704bba82e7a7c))

### [2.0.1](https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v2.0.0...v2.0.1) (2020-09-09)


### Build System

* **deps-dev:** bump standard-version from 7.1.0 to 8.0.1 ([efe22d1](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/efe22d1b29ebe51a8c78fa59fd0718c4cf3aa256))
* **npm:** apply security updates ([a00e4e2](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/a00e4e28c8dc69f6b3528306ea52a3f95687353c))

## [2.0.0](https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v1.0.1...v2.0.0) (2020-02-03)


### ⚠ BREAKING CHANGES

* **rules:** stylelint 13 uses new rules that are not in older versions

### Features

* **rules:** use prettier and recommended rules ([e9328bd](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/e9328bd800a19672e7e1b269901956f7083e2119))


### Bug Fixes

* **rules:** resolve if/else at-rule conflicts ([eda00ad](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/eda00ad9238802d0e57aa489ac443ec0574ad017)), closes [#6](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/6) [#8](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/8)


### Documentation

* **changelog:** use keepachangelog format ([#17](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/17)) ([16a4f14](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/16a4f1422570753f63995fc765131e214d91cfe1))
* **development:** add committing and releasing info ([2396569](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/239656964dcd79b2aa0ad2a9373bb617be455834))
* **general:** update sourcing and install ([0997070](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/099707049a6b0964d223bb1e492c2b10f89c39bc))


### Build System

* **npm:** add standard-version ([60953d3](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/60953d30b789c7d32360098ac11f4e188900d20b))
* split out config files ([9482e85](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/9482e8563b8f34e438cbbb1cdf585e0af40b4e94))
* **npm:** add husky and githooks ([6672a16](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/6672a1633c6922fd4c91024d42517799487139bc))
* **npm:** add husky and githooks ([4121fc4](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/4121fc4b212f523651dcef266971810bdfe4455f))
* **npm:** disallow .files from being packaged ([d589215](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/d58921546b40e582f1802c6570da63fdeeea3ad2))
* **npm:** run audit and updates ([#16](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/16)) ([0ceffb1](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/0ceffb13c21d4b03fcd3ce5a1a8632ae0bd7eb84))
* **npm:** update dependencies ([fa46ebf](https://github.com/coldfrontlabs/stylelint-config-coldfront/commit/fa46ebf6f7966acc2851e55930dd36e07b184e55))

## [1.0.3] - 2019-09-20
### Changed
- Overhauled changelog
- Update dependencies

## [1.0.2] - 2019-07-19
### Changed
- Update dependencies

## [1.0.1] - 2019-05-28
### Added
- Add exceptions to `at-rule-empty-line-before` and `block-closing-brace-newline-after` to resolve conflicts with Sass `at-else-if` rules ([#8](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/8)).

### Removed
- Remove `no-duplicate-dollar-variables` rule ([#6](https://github.com/coldfrontlabs/stylelint-config-coldfront/issues/6))

## [1.0.0] - 2019-04-03
### Added
- Initial config

[Unreleased]: https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v1.0.3...HEAD
[1.0.3]: https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/coldfrontlabs/stylelint-config-coldfront/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/coldfrontlabs/stylelint-config-coldfront/tree/v1.0.0
