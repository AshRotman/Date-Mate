module.exports = function app() {
	app.get("/", function(req, res) {
		res.sendFIle(path.join(__dirname, "home.html"));
	});

	app.get("/survey", function(req, res) {
		res.dendFile(path.join(__dirname, "survey.html"));
	});

	app.get('/logic.js', function(req, res) {
		res.sendFile(path.join(__dirname, "survey.html"));
	});
};