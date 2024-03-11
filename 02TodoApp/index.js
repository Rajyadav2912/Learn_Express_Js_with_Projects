// server instaintiate
const express = require("express");
const app = express();

// Load Config from env file PORT & DataBase
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// milldeware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./Routes/todo");

// mount the todo API routes mount means add or append data
app.use("/api/v1", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully ${PORT}`);
});

// connect to the DB
const dbConnect = require("./Config/database");
dbConnect();

// default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOME PAGE Baby</h1>`);
});
