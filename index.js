var isNotNull = require('@technically/is-not-null').isNotNull

module.exports = function isNull(value) {
  return !isNotNull(value)
}