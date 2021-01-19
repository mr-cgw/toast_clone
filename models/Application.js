const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  salaryMin: {
    type: Number,
    default: 0,
  },
  salaryMax: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: '',
  },
  note: {
    type: String,
    default: '',
  },
  logo: {
    type: String,
    default: "https://res.cloudinary.com/willwang/image/upload/v1610993184/no_logo_bwuaae.png"
  },
  phoneScreen: {
    type: Boolean,
    default: false,
  },
  techInterview: {
    type: Boolean,
    default: false,
  },
  onSite: {
    type: Boolean,
    default: false,
  },
  Offer: {
    type: Boolean,
    default: false,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  resumeUrl: {
    type: String,
    default: ""
  }

},
  { timestamps: true });

module.exports = Application = mongoose.model('Application', ApplicationSchema);
