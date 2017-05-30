const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 3,
    validate: {
      validator: validator.isEmail,
      isAsync: false,
      message: '{VALUE} is not a valid email'
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

AdminSchema.methods.toJSON = function () {
  const adminUser = this;
  const adminObject = adminUser.toObject();

  return _.pick(adminObject, ['_id', 'email']);
};

AdminSchema.methods.generateAuthToken = function () {
  const adminUser = this;
  const access = 'auth';
  const token = jwt.sign({ _id: adminUser._id.toHexString(), access }, 'abc123').toString();

  adminUser.tokens.push({ access, token });
  // Return the whole promise
  return adminUser.save().then(() => {
    return token;
  })
};

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;
