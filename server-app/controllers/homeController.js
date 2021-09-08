const getHome = (req, res) => {
  return res.send({
    status: 200,
    message: 'Testing port'
  })
}

export default { getHome }
