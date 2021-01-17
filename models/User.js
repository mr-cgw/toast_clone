const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // avatarUrl, username
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    reauired: true
  },
  avatarUrl: {
    type: String,
    default: "https://res.cloudinary.com/willwang/image/upload/v1610908189/avatarDefault_ie65ti.png",
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
