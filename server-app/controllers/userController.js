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
    return res.status(400).send(user[1])
  }

  return res.status(200).send(user[1])
}

const login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const user = await User.login({
    email,
    password
  })

  if (user[0] === false) {
    return res.status(400).send({ error: 'Invalid email / password' })
  }
  return res.status(200).send(user[1])
}

export default { signup, login }
