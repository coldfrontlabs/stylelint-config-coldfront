module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
    "stylelint-config-property-sort-order-smacss",
  ],
  rules: {
    "alpha-value-notation": "number",
    "function-no-unknown": null,
    "selector-class-pattern": null,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "no-descending-specificity": null,
  },
};
