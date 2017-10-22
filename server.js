var express = require("express");
// var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(port, function() {
  console.log("app listening on PORT " + port);
});















// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/table", function(req, res) {
//   res.sendFile(path.join(__dirname, "table.html"));
// });

// // Get all characters
// app.get("/reservation", function(req, res) {
//   res.sendFile(path.join(__dirname, "reservation.html"));
// }); 


// app.get('/api/table', function (req, res) {
//   res.json(tables);
// });

// app.post('/api/reservations', function (req, res) {
// 	console.log('reservation submitted');
// 	console.log(req.body);

//   var newReservation = req.body;

//   table.push(newReservation);

  
//   var isBooked;
//   if(table.length <= 5){
//     isBooked = true;
//   }
//   else{
//     isBooked = false;
//   }

//   res.json(isBooked);

// });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//   console.log('App listening on PORT ' + PORT);
// });
















// app.post('/api/clear', function (req, res) {
//   console.log('clear all tables');
//   tables = [];
//   res.sendFile(path.join(__dirname, 'tables.html'));
// });

// app.post('/api/killreservation', function (req, res) {
//   console.log(req.body.id);

//   tables.splice(req.body.id, 1);
//   res.json(tables);
// });