const Validator = require('validator');

module.exports = function validateModifier(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = "Modifier name cannot be empty.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}