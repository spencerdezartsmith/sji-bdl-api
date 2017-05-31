const Service = require('../models/service');
const helpers = require('./helper_functions');

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
  },

  getOneService(req, res, next) {
    const serviceId = req.params.id;

    Service.findOne({ _id: serviceId})
      .then(service => res.send(service))
      .catch(next);
  },

  updateService(req, res, next) {
    const serviceProps = req.body;
    const serviceId = req.params.id;

    Service.findOneAndUpdate({ _id: serviceId }, serviceProps)
      .then(() => Service.findById({ _id: serviceId }))
      .then(service => res.send(service))
      .catch(next);
  },

  removeService(req, res, next) {
    const serviceId = req.params.id;

    Service.findByIdAndRemove({ _id: serviceId })
      .then(service => res.send(service))
      .catch(next);
  },

  searchServices(req, res, next) {
    const searchCriteria = req.query;

    Service.find({ $and: [helpers.buildQuery(searchCriteria)] })
    .then(results => res.send(results))
    .catch(next);
  }

};
