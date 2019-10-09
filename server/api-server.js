let app = require("express");
let bodyParser = require("body-parser");
let server = app();

// To Allow CROS Policy in server and domain specific API provider.

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(bodyParser.json());
const customersDataFile = __dirname + "/data/customers.json";
const ordersDataFile = __dirname + "/data/orders.json";

//Read all customers details and getting response
server.get("/api/customers", function(req, res) {
  console.log("Inside read all customers API!!");
  res.status(200).sendFile(customersDataFile);
});

//Read all orders details and getting response
server.get("/api/orders", function(req, res) {
  console.log("Inside read all order API!!");
  res.status(200).sendFile(ordersDataFile);
});



const PORT = 5000;

server.listen(PORT, () => {
  console.log(`API Server is ready on port ${PORT}`);
});
