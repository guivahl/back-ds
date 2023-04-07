const { Router } = require('express')

const userRouter = require('./usersRoutes')

const router = Router()

router.use(userRouter)

module.exports = router