const { Router } = require('express');
const StudentsController = require('../controllers/StudentsController');

const studentsRouter = Router();

studentsRouter.get('/students', StudentsController.proposals);
// studentsRouter.post('/users/login', StudentsController.login);
studentsRouter.get('/students/test', StudentsController.studentByEmail);

module.exports = studentsRouter;
