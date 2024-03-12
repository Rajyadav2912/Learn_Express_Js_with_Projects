const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blog = require("./Routes/blog");

// mount with blog jo humre routes se aya hn
app.use("/api/v1", blog);

app.listen(3000, () => {
  console.log("App is running successfully");
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Home Page Baby</h1>`);
});
