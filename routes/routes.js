const ReportsController = require('../controllers/reports_controller');

module.exports = (app) => {
  app.get('/api', ReportsController.greeting);

  // User created reports
  app.post('/api/reports', ReportsController.userCreateReport);

  // Admin read all new unedited reports
  app.get('/api/reports/new', ReportsController.adminReadNewReports);

  // Admin create a new edited report
  app.post('/api/reports/:id', ReportsController.adminCreateEditedReport);
};
