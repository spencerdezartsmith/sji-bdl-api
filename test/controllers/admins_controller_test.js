const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const mocha = require('mocha');
const app = require('../../app');
const dummyAdmins = require('./dummy_data');

const Admin = mongoose.model('admin');

// beforeEach(done => {
//   Admin.remove({})
//     .then(() => {
//       let adminOne = new Admin(dummyAdmins.admins[0]);
//       let adminTwo = new Admin(dummyAdmins.admins[1]);
//
//       return Promise.all([adminOne.save(), adminTwo.save()])
//     })
//     .then(() => done());
// })

describe('Admins Controller', () => {
  it('POST to /api/admin/new creates a new admin', (done) => {
    request(app)
      .post('/api/admins/new')
      .send(dummyAdmins.adminExampleOne)
      .end((err, res) => {
        assert(res.headers.hasOwnProperty('x-auth'));
        assert(res.body.email === 'testingAuth@test.com');
        if (err) {
          return done(err);
        }

        Admin.findOne({ email: 'testingAuth@test.com'})
          .then((admin) => {
            assert(admin.password !== dummyAdmins.adminExampleOne.password)
            done()
          });
      });
  });

  it('POST to /api/admin/new should return validation errors if request invalid', (done) => {
    request(app)
      .post('/api/admins/new')
      .send(dummyAdmins.adminBrokenEmail)
      .end((err, res) => {
        assert(422);
        assert(res.body.error === 'admin validation failed: email: testing is not a valid email');
        done();
      });
  });

  it('POST to /api/admin/new should not create an Admin if email in use', (done) => {
    request(app)
      .post('/api/admins/new')
      .send(dummyAdmins.admins[1])
      .end((err, res) => {
        assert(422)
        assert(
          res.body.error === 'E11000 duplicate key error collection: sji_bdl_test.admins index: email_1 dup key: { : "test@test.com" }'
        )
        done()
      });
  });

  it('POST /api/admins/login logs in a valid user and returns a web token', (done) => {
    const loginProps = { email: 'test@test.com', password: '123456' };

    request(app)
      .post('/api/admins/login')
      .send(loginProps)
      .end((err, res) => {
        assert(res.body.email === loginProps.email);
        assert(res.header.hasOwnProperty('x-auth'));
        done();
      });
  });

  it('PUT /api/admins/update', (done) => {
    const id = dummyAdmins.admins[0]._id.toString();
    const token = dummyAdmins.admins[0].tokens[0].token;
    const newEmail = { email: 'updateTest@test.com' };

    request(app)
      .put('/api/admins/update')
      .send(newEmail)
      .set('x-auth', token)
      .end((err, res) => {
        assert(200);
        assert(id === res.body._id.toString());
        assert(res.body.email === newEmail.email);
        done();
      });
  });

  it('DELETE /api/admins/logout logs a user out deleting the token', (done) => {
    const token = dummyAdmins.admins[0].tokens[0].token;

    request(app)
      .delete('/api/admins/logout')
      .set('x-auth', token)
      .end((err, res) => {
        assert(200);
        done();
      });
  });


  // Testing purposes
  it('GET /users/me returns admin if authenticated', (done) => {
    request(app)
      .get('/users/me')
      .set('x-auth', dummyAdmins.admins[0].tokens[0].token)
      .end((err, res) => {
        assert(res.body._id.toString() === dummyAdmins.admins[0]._id.toString());
        assert(res.body.email === dummyAdmins.admins[0].email);
        done();
      });
  });

  it('GET /user/me should return a 401 if not authenticated', (done) => {
    request(app)
      .get('/users/me')
      .end((err, res) => {
        assert(401);
        assert(res.error.text === 'Unauthorized Access')
        done();
      });
  });


});
