const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  },
  salaryMin: {
    type: Number,
    default: 0
  },
  salaryMax: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: ""
  },
  note: {
    type: String,
    default: ""
  }
})