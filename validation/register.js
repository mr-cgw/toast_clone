const Validator = require('validator');
const validText = require('./ValidText');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.handle = validText(data.username) ? data.username : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.handle = 'Username must be between 2 and 30 chars';
  }

  if (Validator.isEmpty(data.username)) {
    errors.handle = 'Username field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = 'Password must be between 2 and 30 chars';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
