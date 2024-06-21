const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// cookie - parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect();

const user = require("./routes/user");
app.use("/api/v1", user);

// activation
app.listen(PORT, () => {
  console.log(`Server Start Successfull PORT No. ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("HELLO Jii AUTHENTICATION ka Backend Hai......");
});
