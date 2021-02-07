const Validator = require('validator');

module.exports = function validateGroup(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = "Group name cannot be empty.";
  }
  // if (!Array.isArray(data.items)) {
  //   errors.items = "Items must be an array."
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}