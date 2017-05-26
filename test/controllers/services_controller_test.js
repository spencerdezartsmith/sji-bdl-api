const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const dummyServices = require('./dummy_data');

const Service = mongoose.model('service');

describe('Services Controller', () => {
  let newService;

  beforeEach(done => {
    newService = new Service(dummyServices.serviceTwo)
    newService.save().then(() => done());
  });

  it('POST to /api/services can create a new service', (done) => {
    const service = dummyServices.serviceOne;

    request(app)
      .post('/api/services')
      .send(service)
      .end((err, res) => {
        assert(res.body.phone === '4155584944');
        done();
      });
  });

  it('GET to /api/services returns a list of services', (done) => {
    request(app)
      .get('/api/services')
      .end((err, res) => {
        assert(res.body.length === 1);
        done()
      })
  });

  it('GET to /api/services/id return a single service', (done) => {
    request(app)
      .get(`/api/services/${newService._id}`)
      .end((err, res) => {
        assert(res.body._id.toString() === newService._id.toString());
        done();
      });
  });

  it('PUT to /api/services/id updates a single service', (done) => {
    const serviceProps = { name: 'Hiatus Kyote' };

    request(app)
      .put(`/api/services/${newService._id}`)
      .send(serviceProps)
      .end((err, res) => {
        assert(res.body._id.toString() === newService._id.toString());
        assert(res.body.name === 'Hiatus Kyote');
        done();
      });
  });

});
