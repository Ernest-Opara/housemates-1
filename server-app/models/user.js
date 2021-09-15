import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [5, 'Password is too short']
    },
    salt: String,
    imageUrl: String
  },
  { timestamps: true } //This stores the createdAt and updatedAt time of the model
)

const User = new mongoose.model('User', userSchema)

export default User
