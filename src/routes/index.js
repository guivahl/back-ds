const { Router } = require('express');

const userRouter = require('./usersRoutes');
const studentsRouter = require('./studentsRoutes');
const professorsRouter = require('./professorsRoutes');
const proposalsRouter = require('./proposalsRoutes');
const submissionsRouter = require('./submissionsRoutes');

const router = Router();

router.use(userRouter);
router.use(studentsRouter);
router.use(professorsRouter);
router.use(proposalsRouter);
router.use(submissionsRouter);

module.exports = router;
