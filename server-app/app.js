import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './routes/routes.js'
import mongoose from 'mongoose'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  },
  (err) => {
    if (err) {
      console.log('Error connecting to the database', err)
    }
    console.log('Connected to MongoDB.')
  }
)

app.listen(process.env.SERVER_PORT, () =>
  console.log('Server listening on port ' + process.env.SERVER_PORT)
)
