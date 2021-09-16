const getError = (req, res) => {
  return res.status(400).send({ error: 'Error' })
}

export default { getError }
