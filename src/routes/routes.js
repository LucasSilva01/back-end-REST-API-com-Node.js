const express = require('express');
const routes = express.Router();
const promotorController = require('../controllers/promotorController')

routes.post('promotores', promotorController.insert);

module.exports = routes;