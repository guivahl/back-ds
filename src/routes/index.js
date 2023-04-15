const { Router } = require('express');

const userRouter = require('./usersRoutes');
const studentsRouter = require('./studentsRoutes');

const router = Router();

router.use(userRouter);
router.use(studentsRouter);

module.exports = router;
