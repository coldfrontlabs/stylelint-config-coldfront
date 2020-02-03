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

## [Changelog](/CHANGELOG.md)

## [License](/LICENSE)
