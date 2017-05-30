const _ = require('lodash');
const Admin = require('../models/admin');

module.exports = {
  createNewAdmin(req, res, next) {
    const adminProps = _.pick(req.body, ['email', 'password']);
    const admin = new Admin(adminProps);

    admin.save().then(() => { return admin.generateAuthToken() })
      .then((token) => {
        res.header('x-auth', token).send(admin)
      })
      .catch(next);
  }
};
