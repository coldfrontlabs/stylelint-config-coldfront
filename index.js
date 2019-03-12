'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'number-leading-zero': 'never',
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
          'after-comment',
          'after-dollar-variable'
        ]
      }
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': true
  }
}
