'use strict'

module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended",
    "stylelint-config-property-sort-order-smacss"
  ],
  plugins: ["stylelint-scss", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true
  }
}
