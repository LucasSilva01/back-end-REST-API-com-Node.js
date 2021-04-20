const express = require('express');
const routes = express.Router();

const usuarioController = require('../app/controllers/usuarioController')
const eventController = require('../app/controllers/eventsController')

routes.post('/usuarios', usuarioController.insert)

routes.get('/usuarios', usuarioController.index)

routes.get('/usuarios/:id', usuarioController.details)

routes.put('/usuarios/:id', usuarioController.update)

routes.delete('/usuarios/:id', usuarioController.delete)


routes.post('/events', eventController.add)

routes.get('/events', eventController.listAll)

routes.get('/events/:id', eventController.searchId)

routes.put('/events/:id', eventController.update)

routes.delete('/events/:id', eventController.delete)

module.exports = routes;