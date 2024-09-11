const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verifyToken = require("./middleware/auth")
const port = 3004;

const connection = require('./connection.js');


app.use(cors({
  origin: 'http://localhost:4010',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());


app.use("/movie", require("./routes/movieRouter.js"));
app.use("/user", require("./routes/userRouter.js"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



