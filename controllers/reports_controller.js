const Report = require('../models/report');

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
  },

  adminCreateEditedReport(req, res, next) {
    const reportId = req.params;
    const editProps = req.body;

    Report.findByIdAndUpdate(reportId.id, { $set: { editedReport: editProps, edited: true }})
      .then(() => Report.findById({ _id: reportId }))
      .then(report => res.send(report))
      .catch(next);
  }
};
