const { Router } = require('express');

const userRouter = require('./usersRoutes');
const studentsRouter = require('./studentsRoutes');
const professorsRouter = require('./professorsRoutes');
const proposalsRouter = require('./proposalsRoutes');

const reviewsRouter = require('./reviewsRoutes');

const router = Router();

router.use(userRouter);
router.use(studentsRouter);
router.use(professorsRouter);

router.use(reviewsRouter);

module.exports = router;
