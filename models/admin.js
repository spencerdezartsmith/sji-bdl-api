const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3,
    validate: {
      validator: validator.isEmail,
      message: `${value} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;
