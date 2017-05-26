const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost/sji_bdl_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', err);
    });
});

beforeEach(done => {
  const { reports, services } = mongoose.connection.collections;
  reports.drop()
    .then(() => reports.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(() => {
      services.drop()
    })
    .then(() => done())
    .catch(() => done());
});
