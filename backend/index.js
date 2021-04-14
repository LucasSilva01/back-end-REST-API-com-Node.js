const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
requireDir('./src/models')

const app = express();

//permite dados do tipo json
app.use(express.json());
app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso',{
    useNewUrlParser:true, useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true)


app.use('/sistema', require('./src/routes/routes'));

const PORT = 3005

app.listen(PORT, () => {
    
    console.log("Servidor Rodando")
})


//todos modelos estão dentro da pasta models

