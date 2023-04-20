const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');

const professorRouter = Router();

professorRouter.get('/professors', ProfessorController.index);
professorRouter.get('/professors/reviews', ProfessorController.getProposalsToReview);

module.exports = professorRouter;
