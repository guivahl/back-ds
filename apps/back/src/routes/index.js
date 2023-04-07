const { Router } = require('express')

const UserController = require('../controller/UserController')

const router = Router()

router.get('/users', UserController.index)

module.exports = router