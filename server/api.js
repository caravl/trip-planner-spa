const express = require('express');
const api = express.Router();
const models = require('../models')

api.get('/', function(req, res, next) {
  models.Hotel.findAll()
  .then(hotels => {
    console.log(hotels)
  })
})


module.exports = api;
