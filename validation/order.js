module.exports = function validateMenu(data) {
  let errors = {};
  if (data.orderType === 'deliver') {
    if (
      !data.customerName ||
      !data.customerPhone ||
      !data.customerAddress ||
      !data.customerEmail
    ) {
      errors.name =
        'please provide a name, a phone number, an email address and a valid physical address';
    }
  }
  if (data.orderType === 'dineIn') {
    if (!data.tableNumber) {
      errors.name = 'Provide Table Number';
    }
  }
  if (data.orderType === 'pickup') {
    if (!data.customerName || !data.customerPhone) {
      errors.name = 'please provide a name and a phone number';
    }
  }
  if (!data.menuItems || !data.menuItems.length) {
    errors.name = 'order needs at least one item';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
