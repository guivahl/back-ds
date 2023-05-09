const { Router } = require('express');
const StudentsController = require('../controllers/StudentsController');

const Authentication = require('../middlewares/Authentication');

const studentsRouter = Router();

studentsRouter.get('/students', Authentication.checkIfUserIsStudent, StudentsController.proposals);
studentsRouter.get('/students/proposals/:id/reviews', Authentication.checkIfUserIsStudent, StudentsController.getReviewsByProposal);
studentsRouter.post('/crud', Authentication.checkIfUserIsAdmin, StudentsController.create);
studentsRouter.put('/crud', Authentication.checkIfUserIsAdmin, StudentsController.update);
studentsRouter.delete('/crud', Authentication.checkIfUserIsAdmin, StudentsController.delete);

module.exports = studentsRouter;
