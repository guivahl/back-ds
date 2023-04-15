const { Router } = require('express');
const StudentsController = require('../controllers/StudentsController');

const studentsRouter = Router();

studentsRouter.get('/students', StudentsController.proposals);

module.exports = studentsRouter;
