const ReportsController = require('../controllers/reports_controller');
const ServicesController = require('../controllers/services_controller');

module.exports = (app) => {
  app.get('/api', ReportsController.greeting);

  // User created reports
  app.post('/api/reports', ReportsController.userCreateReport);

  // Admin read all new unedited reports
  app.get('/api/reports/new', ReportsController.adminReadNewReports);

  // Admin can read one report
  app.get('/api/reports/:id', ReportsController.adminReadOneReport);

  // Admin create a new edited report
  app.post('/api/reports/:id', ReportsController.adminCreateEditedReport);

  // Admin can delete an edited report
  app.put('/api/reports/:id', ReportsController.adminDeleteEditedReport);

  // Admin can add a new service
  app.post('/api/services', ServicesController.addNewService);

  // See a list of all services
  app.get('/api/services', ServicesController.getAllServices);
};
