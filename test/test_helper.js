const mongoose = require('mongoose');
const dummyAdmins = require('./controllers/dummy_data');

const Admin = mongoose.model('admin');

before(done => {
	mongoose.connect(process.env.MONGODB_URI);
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
    .then(() => done())
    .catch(() => done());
});

beforeEach(done => {
  Admin.remove({})
    .then(() => {
      let adminOne = new Admin(dummyAdmins.admins[0]);
      let adminTwo = new Admin(dummyAdmins.admins[1]);

      return Promise.all([adminOne.save(), adminTwo.save()])
    })
    .then(() => done());
})
