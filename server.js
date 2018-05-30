const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

//*********** APP SETUP *********

//app.use registers middleware
//morgan is a logging framework
app.use(morgan('combined'));
//bodyParser parses requests into json
app.use(bodyParser.json({ type: '*/*' }));

//***** Routes *****

require("./routes/html-routes.js")(app);







//*********** SERVER SETUP ***********

//Specify Port
const PORT = process.env.PORT || 3001;
//Forward HTTP Requests to Express
const server = http.createServer(app);
server.listen(PORT);
console.log('Server listening on:', PORT);








// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Define API routes here

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
