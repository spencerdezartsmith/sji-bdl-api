const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const dummyReports = require('./dummy_reports');

const Report = mongoose.model('report');

describe('Reports controller', () => {
  it('Post to /api/reports creates a new report', (done) => {
    Report.count().then(count => {
      request(app)
        .post('/api/reports')
        .send(dummyReports.reportOne)
        .end(() => {
          Report.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});
