const express = require('express');
const router = express.Router(); 
const authMiddleware = require('../middlewares/auth')
const Event = require('../models/events');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    res.send({ 
        ok: true,
        user: req.params.userId
    });

});

router.get('/:eventId', async (req, res) => {
    res.send({ user: req.userId });
})

router.post('/', async (req, res) => {
    res.send({ user: req.userId });
})

router.put('/:eventId', async (req, res) => {
    res.send({ user: req.userId });
})

router.delete('/:eventId', async (req, res) => {
    res.send({ user: req.userId });
})

module.exports = (app) => app.use('/events', router);
