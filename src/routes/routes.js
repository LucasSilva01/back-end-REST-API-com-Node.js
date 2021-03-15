const express = require('express');
const routes = express.Router();

const usuarioController = require('../controllers/usuarioController')


routes.post('/usuarios', usuarioController.insert);



module.exports = routes;