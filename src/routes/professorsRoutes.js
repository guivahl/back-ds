const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');
const Authentication = require('../middlewares/Authentication');

const professorRouter = Router();

professorRouter.get('/professors', ProfessorController.index);
professorRouter.get('/professors/classes/:id/proposals/reviews', Authentication.checkIfUserIsProfessor, ProfessorController.getProposalsToReview);
professorRouter.get('/professors/classes/:id/proposals/coordinations', Authentication.checkIfUserIsProfessor, ProfessorController.getProposalsToCoordinate);
professorRouter.get('/professors/classes/:id/proposals/advises', Authentication.checkIfUserIsProfessor, ProfessorController.getProposalsToAdvise);
professorRouter.get('/professors/classes', Authentication.checkIfUserIsProfessor, ProfessorController.getAllClasses);
professorRouter.post('/professors', Authentication.checkIfUserIsAdmin, ProfessorController.create);
professorRouter.put('/professors', Authentication.checkIfUserIsAdmin, ProfessorController.update);
professorRouter.delete('/professors', Authentication.checkIfUserIsAdmin, ProfessorController.delete);

module.exports = professorRouter;
