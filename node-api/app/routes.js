// app/routes.js
const Borrower = require('./controllers/borrower');

module.exports = function(app, passport) {
	app.post('/api/borrower', Borrower.create);
	app.get('/api/borrower', Borrower.list);
	app.get('/api/borrower/:id', Borrower.getOne);
};