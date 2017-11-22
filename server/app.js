const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../models').db;
const apiRouter = require('./api');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', apiRouter)

app.get('/', function(req, res, next) {
  res.render(path.join(__dirname, '..', 'index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

app.listen(3000, function() {
  console.log('partying on port 3000');
  db.sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});
