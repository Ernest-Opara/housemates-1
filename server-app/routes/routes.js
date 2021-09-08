import express from 'express'
import home from '../controllers/homeController.js'
import error from '../controllers/errorController.js'

const router = express.Router()

router.get('/', home.getHome)

router.get('/error', error.getError)

export default router
