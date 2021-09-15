import User from '../services/user.js'

const signup = async (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const password = req.body.password

  const user = await User.create({
    firstName,
    lastName,
    email,
    password
  })

  if (user[0] === false) {
    return res.send({
      status: 400,
      error: user[1]
    })
  }

  return res.send({
    status: 200,
    data: user[1]
  })
}

const login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = await User.login({
    email,
    password
  })

  if (user[0] === false) {
    return res.send({
      status: 400,
      error: 'Invalid email / password'
    })
  }

  return res.send({
    status: 200,
    data: user[1]
  })
}

export default { signup, login }
