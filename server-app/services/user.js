import User from '../models/user.js'
import bcrypt from 'bcrypt'
const saltRounds = 10
import { translateError } from './util.js'

const create = async ({ firstName, lastName, email, password }) => {
  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password
    })
    const hashed = await hashPassword(password)
    user.salt = hashed.salt
    user.password = hashed.password
    user.imageUrl = process.env.DEFAULT_IMAGE
    await user.save()
    return [true, user]
  } catch (error) {
    return [false, translateError(error)]
  }
}

const login = async ({ email, password }) => {
  try {
    const foundUser = await User.findOne({ email: email })

    const result = await verifyPassword(password, foundUser.password)
    if (result) {
      return [result, foundUser]
    } else {
      return [false]
    }
  } catch (error) {
    return [false]
  }
}

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds)
  password = await bcrypt.hash(password, salt)
  return { salt, password }
}

const verifyPassword = async (userPassword, hashedPassword) => {
  return await bcrypt.compare(userPassword, hashedPassword)
}



export default {
  create,
  login
}
