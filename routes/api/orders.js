const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const passport = require('passport');
const validateOrder = require('../../validation/order');

//* create menu
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateOrder(req.body);
    if (!isValid) return res.status(400).json(errors);
    const newOrder = new Order({
      orderType: req.body.orderType,
      customer: req.body.customer,
      customerName: req.body.customerName,
      customerPhone: req.body.customerPhone,
      customerAddress: req.body.customerAddress,
      customerEmail: req.body.customerEmail,
      menuItems: req.body.menuItems,
      cardNumber: req.body.cardNumber,
    });
    console.log('newOrder', newOrder);

    newOrder
      .save()
      .then((order) => res.json(order))
      .catch((err) => console.log(err));
  }
);
router.get(
  '/:orderId',

  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Order.findById(req.params.orderId)
      .then((order) => res.json(order))
      .catch(() => res.status(404).json({ noSuchOrder: 'No order found' }));
  }
);

router.patch('/:orderId', (req, res) => {
  Order.findById(req.params.orderId).then((order) => res.json(order));
});

module.exports = router;
