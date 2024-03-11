// step 1 : create a folder
// step 2: move into that folder
// step 3 : npm init -y
// step 4 : open folder using VS Code
// step 5 : npm i express
// step 6 : create server.js

//Server Instantiate
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Used to parse request.body in express -> PUT or POST
const bodyParser = require("body-parser");

// specifically parse JSON Data and Add it to the request.Body object
app.use(bodyParser.json());

// Activate the Server on 3000 Port
app.listen(8000, () => {
  console.log("server Started at port no. 8000");
});

// Route get request
app.get("/", (request, response) => {
  response.send("Hello Raj Yadav. Your are Software Developer Engineer");
});

// Route Post request
app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Submitted Successfully");
});

// const mongoose = require("mongoose");

// MongoDB connection URL
// const uri = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB without deprecated options
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true, // Deprecated in driver version 4.0.0
    useUnifiedTopology: true, // Deprecated in driver version 4.0.0
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
