import express from 'express'
import home from '../controllers/homeController.js'
import error from '../controllers/errorController.js'
import user from '../controllers/userController.js'

const router = express.Router()

router.get('/', home.getHome)

router.get('/error', error.getError)

router.post('/signup', user.signup)

router.post('/login', user.login)

export default router
