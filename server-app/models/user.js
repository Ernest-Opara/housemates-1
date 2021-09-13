import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  password: { type: String, required: [true, "can't be blank"] },
  hash: String,
  salt: String,
  joinedDate: String,
  image: String
})

const User = new mongoose.model('User', userSchema)

export default User
