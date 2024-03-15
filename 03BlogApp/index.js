// server inhanstiate
const express = require("express");
const app = express();

// load .env configuration
require("dotenv").config();

// find port no. and write default port
const PORT = process.env.PORT || 3000;

// middleware // Used to parse request.body in express
app.use(express.json());

// import Routes file
const blog = require("./Routes/blog");

// mount with blog jo humre routes se aya hn
app.use("/api/v1", blog);

// import Databse, connection establish and call DB
const connectWithDb = require("./Config/database");
connectWithDb();

// start the server PORT
app.listen(PORT, () => {
  console.log(`App is running successfully ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Home Page Baby</h1>`);
});
