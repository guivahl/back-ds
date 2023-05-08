const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const Authentication = require('../middlewares/Authentication');

const classesRouter = Router();

classesRouter.get('/classes/reviews', Authentication.checkIfUserIsProfessor, ClassController.getByReviews);

module.exports = classesRouter;
