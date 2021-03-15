const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();

//permite dados do tipo json
app.use(express.json());
app.use(cors());

//evitar problema de compatibiladde
mongoose.connect('mongodb://localhost:27017/armazenamento', {useNewUrlParser: true});

//todos modelos estão dentro da pasta models
requireDir('./src/models')
app.use('/sistema', require('./src/routes/routes'))
app.listen(3001);