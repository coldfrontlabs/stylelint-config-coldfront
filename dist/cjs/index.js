"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "alpha-value-notation": "number",
    "function-no-unknown": null,
    "selector-class-pattern": null,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "no-descending-specificity": null,
    "selector-no-qualifying-type": null,
    "max-nesting-depth": null,
    "scss/dollar-variable-colon-space-after": "always-single-line",
  },
};
