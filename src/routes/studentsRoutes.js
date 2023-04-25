const { Router } = require('express');
const StudentsController = require('../controllers/StudentsController');

const Authentication = require('../middlewares/Authentication');

const studentsRouter = Router();

studentsRouter.get('/students', Authentication.checkIfUserIsStudent, StudentsController.proposals);
studentsRouter.get('/students/proposals/:id/reviews', Authentication.checkIfUserIsStudent, StudentsController.getReviewsByProposal);

module.exports = studentsRouter;
