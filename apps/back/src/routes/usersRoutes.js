const { Router } = require('express');
const UserController = require('../controllers/UserController');

const userRouter = Router();

userRouter.get('/users', UserController.index)
userRouter.post('/users/login', UserController.login)

module.exports = userRouter;
