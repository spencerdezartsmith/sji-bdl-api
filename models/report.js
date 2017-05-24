const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PointSchema = require('./point_schema');
const PerpSchema = require('./perp_schema');

const ReportSchema = new Schema({
	city: {
		type: String,
		required: true
	},
	locationType: {
		type: String,
		required: true
	},
	geolocation: PointSchema,
	gender: String,
	date: String,
	assaultType: [String],
	assaultDescription: String,
	perpetrator: PerpSchema,
	editedReport: { type: Schema.Types.ObjectId, ref: 'editedReport'}
});

const Report = mongoose.model('report', ReportSchema);

module.exports = Report;
