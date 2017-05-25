const Report = require('../models/report');
const EditedReport = require('../models/edited_report');

module.exports = {
	greeting(req, res) {
		res.send({ hello: 'world' });
	},

	userCreateReport(req, res, next) {
		const reportProps = req.body;

    Report.create(reportProps)
      .then(report => res.send(report))
      .catch(next);
	},

  adminReadNewReports(req, res, next) {
    Report.find({ edited: false })
      .then(newReports => res.send(newReports))
      .catch(next);
  }
};
