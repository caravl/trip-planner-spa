const express = require('express');
const api = express.Router();
const models = require('../models');

api.get('/', function(req, res, next) {
  let everything;

  models.Hotel.findAll()
  .then(hotels => {
    everything = hotels;
  })

  models.Restaurant.findAll()
  .then(restaurants => {
    everything = everything.concat(restaurants);
  })

  models.Activity.findAll()
  .then(activities => {
    everything = everything.concat(activities);
    return everything;
  })
  .then(result => {
    res.json(result);
  })

})


module.exports = api;
