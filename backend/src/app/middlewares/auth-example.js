const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth')

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return res.status(401).send({error: 'JWT não informado'});
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, authConfig.secret)

    const { sub } = decoded

    request.user = { id: sub }

    return next()
  } catch {
    return res.status(401).send({error: 'JWT inválido'});
  }
}