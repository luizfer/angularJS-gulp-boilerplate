'use strict';

const express     = require('express');
const compression = require('compression')
const http  = require('http');
const path  = require('path');

const port = process.env.PORT || 3333;
const app  = express();
const server = http.createServer(app);

/**
|--------------------------------------------------
| Routing
|--------------------------------------------------
*/

app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Application started on port: ${port}`);
});