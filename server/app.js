const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  res.send('you made it')
});

app.listen(3000, function(req, res, next) {
  console.log('partying on port 3000')
});
