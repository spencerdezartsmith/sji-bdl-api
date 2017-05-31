const Report = require('../models/report');
const helpers = require('./helper_functions');

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
    const reportId = req.params.id;
    const editProps = req.body;

    Report.findByIdAndUpdate(reportId, { $set: { editedReport: editProps, edited: true }})
      .then(() => Report.findById({ _id: reportId }))
      .then(report => {
        res.send(report)
      })
      .catch(next);
  },

  adminReadOneReport(req, res, next) {
    const reportId = req.params.id;

    Report.findById(reportId)
      .then(report => res.send(report))
      .catch(next)
  },

  adminDeleteEditedReport(req, res, next) {
    const reportId = req.params.id;

    Report.update({ _id: reportId }, { $set: {edited: false }, $unset: { editedReport: 1 }})
      .then(() => Report.findById({ _id: reportId }))
      .then(report => res.send(report))
      .catch(next);
  },

  searchEditedReports(req, res, next) {
    const criteria = req.query;

    Report.find(helpers.buildQuery(criteria))
      .then((reports) => res.send(reports))
      .catch(next);
  }
};
