# stylelint-config-coldfront

[![NPM Version](https://img.shields.io/npm/v/stylelint-config-coldfront.svg?style=for-the-badge)](https://www.npmjs.org/package/stylelint-config-coldfront)
[![License](https://img.shields.io/github/license/coldfrontlabs/stylelint-config-coldfront.svg?style=for-the-badge)](/LICENSE)

Custom stylelint config used for Coldfront projects.

Extends [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended), [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss), [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier), and [stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss).

Implements the [stylelint-scss](https://github.com/kristerkari/stylelint-scss), and the [stylelint-prettier](https://github.com/prettier/stylelint-prettier) plugins.

For more detail on the rules implemented, see the [config itself](/index.js).

## Installation

```bash
npm install stylelint prettier stylelint-config-coldfront --save-dev
```

## Usage

Add the following to your stylelint configuration file

```js
extends: [
  'stylelint-config-coldfront'
]
```

## Development

### Committing
This project uses the conventional commit standard, which means your commits should follow a basic template of:

> \<type>[optional scope]: \<description>
>
> [optional body]
>
> [optional footer(s)]

For more detailed information about available types, scopes, breaking changes, etc. please see the [official documentation](https://www.conventionalcommits.org/en/v1.0.0/).

This project also provides a command to assist you in formatting  commit messages using [commitizen](https://commitizen.github.io/cz-cli/):

```bash
npm run commit
```

### Versioning
This project uses Semantic Versioning 2.0.0 to keep track of releases.

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> 1. MAJOR version when you make incompatible API changes,
> 2. MINOR version when you add functionality in a backward compatible manner, and
> 3. PATCH version when you make backwards compatible bug fixes.
>
> Additional labels for pre-release and build metadata are available as extensions to > the MAJOR.MINOR.PATCH format.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

When making a release, you should use the provided command:

```bash
npm run release
```

This command uses [standard-version](https://github.com/conventional-changelog/standard-version) to parse through your commits, decide what kind of release will be created, and automatically generates a [CHANGELOG.md](./CHANGELOG.md) file for your project. These changes are then commited using the message `chore(release): <version number>`.

Once that is done, you can simply run `git push --follow-tags origin` to have your release pushed up to the repository.
