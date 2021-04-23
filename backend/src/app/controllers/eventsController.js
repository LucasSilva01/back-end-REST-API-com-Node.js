const express = require('express');
const router = express.Router(); 
const authMiddleware = require('../middlewares/auth')
const Event = require('../models/events');

router.use(authMiddleware);


router.get('/', (req, res) => {
    res.send({
        user: req.userId
    })
    
})






/* 
router.get('/', async (req, res) => {
    try{


        const events = await Event.find().populate('user');
        return res.send ({ events })
    }catch(err){


        return res.status(400).send({ error: 'Erro ao listar' })

    }
});

router.get('/:eventId', async (req, res) => {

    res.send({ user: req.userId });
});

router.post('/registerEvent', async (req, res) => {
    try{
        const event = await Event.create({...req.body, user: req.userId});
        return res.send({ event });

    }catch(err){
        return res.status(400).send({ error: 'Erro ao criar' })
    }
})

router.put('/:eventId', async (req, res) => {
    res.send({ user: req.userId });
})

router.delete('/:eventId', async (req, res) => {
    res.send({ user: req.userId });
})

*/
module.exports = app => app.use('/events', router);
