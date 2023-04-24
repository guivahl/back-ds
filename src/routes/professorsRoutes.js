const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');
const Authentication = require('../middlewares/Authentication');

const professorRouter = Router();

professorRouter.get('/professors', Authentication.checkIfUserIsProfessor, ProfessorController.index);
professorRouter.get('/professors/reviews', Authentication.checkIfUserIsProfessor, ProfessorController.getProposalsToReview);
professorRouter.get('/professors/classes', Authentication.checkIfUserIsProfessor, ProfessorController.getAllClasses);

module.exports = professorRouter;
