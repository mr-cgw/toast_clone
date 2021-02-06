const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  groups: {
    type: Array,
    default: []
  }


},
  {
    timestamps: true
  }
)

module.exports = Menu = mongoose.model('Menu', MenuSchema); 