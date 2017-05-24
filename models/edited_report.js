const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PointSchema = require('./point_schema');

const EditedReportSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	geolocation: PointSchema,
	report: { type: Schema.Types.ObjectId, ref: 'report' }
});

const EditedReport = mongoose.model('editedReport', EditedReportSchema);

module.exports = EditedReport;
