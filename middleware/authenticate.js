const Admin = require('../models/admin');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  Admin.findByToken(token)
    .then((admin) => {
      if (!admin) return Promise.reject();
      req.admin = admin;
      req.token = token;
      next()
    })
    .catch((e) => res.status(401).send('Unauthorized Access'))
    .catch(next);
}

module.exports = authenticate;
