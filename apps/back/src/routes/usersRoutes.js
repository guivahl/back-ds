const { Router } = require('express')
const UserController = require('../controllers/UserController')

const userRouter = Router()

userRouter.get('/users', UserController.index)

module.exports = userRouter