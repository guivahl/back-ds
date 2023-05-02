const { Router } = require('express');
const SubmissionController = require('../controllers/SubmissionController');

const Authentication = require('../middlewares/Authentication');

const submissionsRouter = Router();

submissionsRouter.get('/p', Authentication.checkIfUserIsStudent, SubmissionController.status);

module.exports = submissionsRouter;
