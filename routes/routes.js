const ReportsController = require('../controllers/reports_controller')

module.exports = (app) => {
  app.get('/api', ReportsController.greeting);
};
