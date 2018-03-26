// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var aggregatorSchema = mongoose.Schema({
    AggregatorId: Number,
    AggregatorName: String,
    AggregatorAbbrev: String
});

module.exports = mongoose.model('aggregators', aggregatorSchema);