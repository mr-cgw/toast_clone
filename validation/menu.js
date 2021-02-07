const Validator = require('validator');

module.exports = function validateMenu(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = "Menu name cannot be empty.";
  }
  // if (!Array.isArray(data.groups)) {
  //   errors.groups = "Groups must be an array."
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}