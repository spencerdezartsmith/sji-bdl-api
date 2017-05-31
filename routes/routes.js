const ReportsController = require('../controllers/reports_controller');
const ServicesController = require('../controllers/services_controller');
const AdminsController = require('../controllers/admins_controller');
const authenticate = require('../middleware/authenticate');

module.exports = (app) => {
  app.get('/api', ReportsController.greeting);

  // Create a new admin account
  app.post('/api/admins/new', AdminsController.createNewAdmin);

  // Admin can login
  app.post('/api/admins/login', AdminsController.login);

  // Admin can logout
  app.delete('/api/admins/logout', authenticate, AdminsController.logout);

  // Admin can update login details
  app.put('/api/admins/update', authenticate, AdminsController.updateLoginDetails);

  // User can create a reports
  app.post('/api/reports', ReportsController.userCreateReport);

  // Admin read all new unedited reports
  app.get('/api/reports/new', authenticate, ReportsController.adminReadNewReports);

  // User can search edited reports using keywords
  app.get('/api/reports/search', ReportsController.searchEditedReports);

  // Admin can read one report
  app.get('/api/reports/:id', authenticate, ReportsController.adminReadOneReport);

  // Admin create a new edited report
  app.post('/api/reports/:id', authenticate, ReportsController.adminCreateEditedReport);

  // Admin can delete an edited report
  app.put('/api/reports/:id', authenticate, ReportsController.adminDeleteEditedReport);

  // Admin can add a new service
  app.post('/api/services', authenticate, ServicesController.addNewService);

  // All can access a list of all services
  app.get('/api/services', ServicesController.getAllServices);

  // User can return services with specific parameters
  app.get('/api/services/search', ServicesController.searchServices);

  // All can access a single services
  app.get('/api/services/:id', ServicesController.getOneService);

  // Admin can update an existing service
  app.put('/api/services/:id', authenticate, ServicesController.updateService);

  // Admin can delete a service
  app.delete('/api/services/:id', authenticate, ServicesController.removeService);

  app.get('/users/me', authenticate, AdminsController.testing);
};
