const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    default: 0
  },
  imgUrl:{
    type:String,
    default:""
  },
  description:{
    type:String,
    default:""
  },
  modifiers: {
    type:Array,
    default:[]
  }


},
  {
    timestamps: true
  }
)

module.exports = Menu = mongoose.model('Item', ItemSchema); 