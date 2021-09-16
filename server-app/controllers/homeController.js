const getHome = (req, res) => {
  return res.status(200).send({
    data: 'testing port'
  })
}

export default { getHome }
