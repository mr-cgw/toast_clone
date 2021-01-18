const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema(
  {
    frontend: {
      type: Object,
      default: {},
    },
    backend: {
      type: Object,
      default: {},
    },
    fullstack: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Jobs = mongoose.model('Jobs', JobsSchema);
