const Service = require('../models/service');

module.exports = {
  addNewService(req, res, next) {
    const serviceProps = req.body;

    Service.create(serviceProps)
      .then(service => res.send(service))
      .catch(next) 
  },

  getAllServices(req, res, next) {
    Service.find({})
      .then(services => res.send(services))
      .catch(next);
  }
};
