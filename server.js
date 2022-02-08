const express = require("express");
const app = express();
const port = 8080;
var cors = require('cors')

const data = require('./data');

app.use(cors())

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
