const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth')

module.exports = (req, res, next) => {
     const authHeather = req.headers.autorization;

     if (!authHeather){
         return res.status(401).send({error: 'No token provide'
         })
     }
     const parts = authHeather.split(' ');

     if (!parts.lenght === 2){
         return res.status(401).send({ error: 'Token error'})
     }

     const [scheme, token] = parts;

     if(!/^Bearer$/i.test(scheme)){
         return res.status(401).send({error: 'Token malformatted'});
     }

     jwt.verify(token, authConfig.secret, (err, decoded) =>{
         if (err){
             return res.status(401).send({ error: 'Token invalid'})
         }
         
         req.userId = decoded.id;
     
         return next();
     })
}