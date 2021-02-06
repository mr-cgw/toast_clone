const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Items: {
    type: Array,
    default: []
  }


},
  {
    timestamps: true
  }
)

module.exports = Menu = mongoose.model('Group', GroupSchema); 