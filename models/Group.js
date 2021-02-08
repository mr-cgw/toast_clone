const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: []
  },
  menuId: {
    type: String,
    required: true
  }


},
  {
    timestamps: true
  }
)

module.exports = Menu = mongoose.model('Group', GroupSchema); 