const { Router } = require('express');
const StudentsController = require('../controllers/StudentsController');

const Authentication = require('../middlewares/Authentication');

const studentsRouter = Router();

studentsRouter.get('/students', Authentication.checkIfUserIsStudent, StudentsController.proposals);

module.exports = studentsRouter;
