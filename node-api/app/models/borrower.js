// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var borrowerSchema = mongoose.Schema({
    BorrowerId: Number,
    BorrowerName: String,
    AggregatorClientId: Number
});

module.exports = mongoose.model('borrowers', borrowerSchema);