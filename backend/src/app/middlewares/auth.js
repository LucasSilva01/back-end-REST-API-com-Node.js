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

     try {
        const decoded = jwt.verify(token, authConfig.secret)
        req.user = decoded
        return next()
      } catch {
        return res.status(401).send({error: 'JWT inválido'});
      }
}