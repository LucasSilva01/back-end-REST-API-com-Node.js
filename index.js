const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');




const app = express();

//permite dados do tipo json
app.use(express.json());
app.use(cors());

//evitar problema de compatibiladde
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso',{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(() =>{ 
    console.log("Conectado ao mongo!")
}).catch((err) => {
    console.log("Erro do carai: "+err)
})

requireDir('./src/models')
app.use('/sistema', require('./src/routes/routes'));


const PORT = 3005

app.listen(PORT, () => {
    requireDir('./src/models')
    app.use('/sistema', require('./src/routes/routes'))
    console.log("Servidor Rodando")
})


//todos modelos estão dentro da pasta models

