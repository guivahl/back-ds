const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');

const Authentication = require('../middlewares/Authentication');

const professorRouter = Router();

professorRouter.get('/professors', ProfessorController.index);
professorRouter.get('/professors/reviews', Authentication.checkIfUserIsProfessor, ProfessorController.getProposalsToReview);

module.exports = professorRouter;
