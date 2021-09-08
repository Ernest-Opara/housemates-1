const getError = (req, res) => {
  return res.send({
    status: 404,
    error: {
      message: 'Oh oh! an error occured'
    }
  })
}

export default { getError }
