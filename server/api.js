const express = require('express');
const api = express.Router();
const models = require('../models');

api.get('/', function(req, res, next) {

  let everything = {};

  models.Hotel.findAll({ include: [ models.Place ]})
  .then(hotels => {
    everything.hotels = hotels;
  })

  models.Restaurant.findAll({ include: [ models.Place ]})
  .then(restaurants => {
    everything.restaurants = restaurants;
  })

  models.Activity.findAll({ include: [ models.Place ]})
  .then(activities => {
    everything.activities = activities;
    return everything;
  })
  .then(result => {
    res.json(result);
  })

})


module.exports = api;
