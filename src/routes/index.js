const { Router } = require('express');

const userRouter = require('./usersRoutes');
const studentsRouter = require('./studentsRoutes');
const professorsRouter = require('./professorsRoutes');
const proposalsRouter = require('./proposalsRoutes');
const reviewsRouter = require('./reviewsRoutes');
const coordinatorRouter = require('./coordinatorRoutes');
const classesRouter = require('./classesRoutes');

const router = Router();

router.use(userRouter);
router.use(studentsRouter);
router.use(proposalsRouter);
router.use(professorsRouter);
router.use(reviewsRouter);
router.use(coordinatorRouter);
router.use(proposalsRouter);
router.use(reviewsRouter);
router.use(classesRouter);

module.exports = router;
