const Validator = require("validator")

module.exports = function validateApplication(data) {
  let errors = {};

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company cannot be empty"
  }
  if (Validator.isEmpty(data.position)) {
    errors.position = "Position cannot be empty"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}