module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
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
  },
};
