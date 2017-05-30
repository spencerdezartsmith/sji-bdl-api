const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const mocha = require('mocha');
const app = require('../../app');
const dummyAdmins = require('./dummy_data');

const Admin = mongoose.model('admin');

describe('Admins Controller', () => {
  it('POST to /api/admin/new creates a new admin with auth token', (done) => {
    request(app)
      .post('/api/admins/new')
      .send(dummyAdmins.adminUserOne)
      .end((err, res) => {
        assert(res.headers.hasOwnProperty('x-auth'));
        assert(res.body.email === 'test@test.com');
        done();
      })
  });
});
