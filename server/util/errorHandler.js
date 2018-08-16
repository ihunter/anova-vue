module.exports = (err, req, res, next) => {
  if (!err.response.status) err.response.status = 500
  res.sendStatus(err.response.status).send(err.message)
}
