const Validator = require('validator');

module.exports = function validateItem(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = "Item name cannot be empty.";
  }
  // if (!Array.isArray(data.modifiers)) {
  //   errors.items = "Modifiers must be an array."
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}