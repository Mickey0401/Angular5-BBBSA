// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var aggregatorClientSchema = mongoose.Schema({
    AggregatorClientId: Number,
    AggregatorId: Number,
    ClientId: Number,
    ConsolWBStartRow: String
});

module.exports = mongoose.model('aggregators', aggregatorSchema);