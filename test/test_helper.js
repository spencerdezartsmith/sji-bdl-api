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
  const { reports, services, admins } = mongoose.connection.collections;
  reports.drop()
    .then(() => {
      reports.ensureIndex({ 'editedReport.content': 'text',
                            'editedReport.title': 'text'
                          })
      reports.ensureIndex({ 'geolocation.coordinates': '2dsphere' })
    })
    .then(() => services.drop())
    .then(() => services.ensureIndex({ name: 'text' }))
    // .then(() => admins.drop())
    .then(() => done())
    .catch(() => done());
});
