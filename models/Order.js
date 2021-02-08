const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const OrderSchema = new Schema(
  {
    orderType: {
      type: String,
      default: 'dineIn',
      required: true,
    },
    customerName: {
      type: String,
      default: '',
    },
    customerPhone: {
      type: String,
      default: '',
    },
    customerAddress: {
      type: String,
      default: '',
    },
    customerEmail: {
      type: String,
      default: '',
    },
    tableNumber: {
      type: Number,
    },
    menuItems: {
      type: Array,
      required: true,
    },
    customer: {
      type: ObjectId,
      ref: 'User',
    },
    paymentType: {
      type: String,
      default: 'card',
      required: true,
    },
    cardNumber: {
      type: String,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Menu = mongoose.model('Order', OrderSchema);
