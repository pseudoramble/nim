require("dotenv").config();

const express = require("express");
const readFileSync = require("fs").readFileSync;

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(readFileSync('./dist/index.html').toString());
});

app.listen(3141, () => {
  console.warn('Listening on localhost:3141');
});
