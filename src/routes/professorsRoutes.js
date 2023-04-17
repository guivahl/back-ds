const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');

const professorRouter = Router();

professorRouter.get('/professors', ProfessorController.index);

module.exports = professorRouter;
