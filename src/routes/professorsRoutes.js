const { Router } = require('express');

const ProfessorController = require('../controllers/ProfessorController');

const professorRouter = Router();

professorRouter.get('/professors', ProfessorController.index);
professorRouter.get('/professors/classes', ProfessorController.getAllClasses);

module.exports = professorRouter;
