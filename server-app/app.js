import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './routes/routes.js'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

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
